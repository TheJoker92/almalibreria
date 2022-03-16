import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { HttpServiceService } from '../../services/http-service.service';

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

  constructor(private httpService: HttpServiceService) {

  }

  ngOnInit() {
    this.httpSubscription = this.httpService.getBookAuthor().subscribe({
      next: (bookList: IBook[]) => {
        this.isEmptyList = false
        
        //adatta le righe per la visualizzazione FE
        this.elementsAdapter(bookList)

        //Prende i campi della tabella
        this.keys = Object.keys(bookList[0]) 
      },
      error: (error: any) => {
        this.isEmptyList = true

        throw(error)
      }
    })
  }

  elementsAdapter(bookList: IBook[]) {
    //Pulisco la lista prima di inserire i nuovi valori
    this.bookList = []


    for (let bookRaw of bookList) {
      const dataPubblicazione = bookRaw["dataPubblicazione"].split("T")[0]


      let book: IBook = {
        "id": bookRaw["id"],
        "titolo": bookRaw["titolo"],
        "trama": bookRaw["trama"],
        "pagine": bookRaw["pagine"],
        "dataPubblicazione": dataPubblicazione
      }

      this.bookList.push(book)
    }
  }

  ngOnDestroy() {
    if (this.httpSubscription) this.httpSubscription.unsubscribe()
  }

  updateBook(id: number) {
    this.httpService.updateBook(id).subscribe({
      next: (response: any) =>  {
        window.alert("Il libro è stato modificato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NEL MODIFICARE IL LIBRO")


        throw(error)
      }
    })
  }

  deleteBook(id: number) {
    this.httpService.updateBook(id).subscribe({
      next: (response: any) =>  {
        window.alert("Il libro è stato eliminato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NELL' ELIMINARE IL LIBRO")


        throw(error)
      }
    })
  }

}
