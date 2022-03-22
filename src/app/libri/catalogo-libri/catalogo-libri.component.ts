import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { HttpServiceService } from '../../services/http-service.service';
import { ConfirmationService } from 'primeng/api';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-catalogo-libri',
  templateUrl: './catalogo-libri.component.html',
  styleUrls: ['./catalogo-libri.component.scss']
})
export class CatalogoLibriComponent implements OnInit {

  httpSubscription: Subscription | undefined

  bookList: IBook[] = []
  isEmptyList: boolean = true // Messaggio da mostrare all'utente

  keys: string[] = []

  constructor(private httpService: HttpServiceService,
              private confirmDeleteDialogService: ConfirmationService,
              private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.isEmptyList = false
    let bookList: any[] = [{
      id: 1,
      titolo: "titolo1",
      trama: "bla  bla",
      pagine: 110,
      datapubblicazione: "2021-11-10"
    }]
    this.elementsAdapter(bookList)

    this.loaderService.display = true
    this.httpSubscription = this.httpService.getBooks().subscribe({
      next: (bookList: IBook[]) => {
        this.loaderService.display = false
        this.isEmptyList = false

        //adatta le righe per la visualizzazione FE
        this.elementsAdapter(bookList)

        //Prende i campi della tabella
        this.keys = Object.keys(bookList[0]) 
        
      },
      error: (error: any) => {
        this.isEmptyList = true
        this.loaderService.display = false

        throw(error)
      }
    })
  }

  elementsAdapter(bookList: IBook[]) {
    //Pulisco la lista prima di inserire i nuovi valori
    this.bookList = []


    for (let bookRaw of bookList) {
      const datapubblicazione = bookRaw["datapubblicazione"].split("T")[0]


      let book: IBook = {
        "id": bookRaw["id"],
        "titolo": bookRaw["titolo"],
        "trama": bookRaw["trama"],
        "pagine": bookRaw["pagine"],
        "datapubblicazione": datapubblicazione
      }

      this.bookList.push(book)
    }
  }

  ngOnDestroy() {
    if (this.httpSubscription) this.httpSubscription.unsubscribe()
  }

  updateBook(id: number) {
    this.httpService.updateBook(id).subscribe({
      next: (response: any) => {
        window.alert("Il libro è stato modificato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NEL MODIFICARE IL LIBRO")


        throw (error)
      }
    })
  }

  openDeleteDialog(book: IBook) {
    this.confirmDeleteDialogService.confirm({
      message: `Sei sicuro di voler eliminare il libro <strong>${book.titolo}</strong> ?`,
      accept: () => {
        this.deleteBook(book.id)
      }

    })
  }

  deleteBook(id: number) {
    this.httpService.updateBook(id).subscribe({
      next: (response: any) => {
        window.alert("Il libro è stato eliminato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NELL' ELIMINARE IL LIBRO")


        throw (error)
      }
    })
  }


}
