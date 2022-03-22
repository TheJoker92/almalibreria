import { Component, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { ILoan } from 'src/app/interfaces/ILoan';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-catalogo-prestiti',
  templateUrl: './catalogo-prestiti.component.html',
  styleUrls: ['./catalogo-prestiti.component.scss']
})
export class CatalogoPrestitiComponent implements OnInit {

  httpSubscription: Subscription | undefined

  loanList: ILoan[] = []
  isEmptyList: boolean = true // Messaggio da mostrare all'utente

  keys: string[] = []

  constructor(private httpService: HttpServiceService) {

  }

  ngOnInit() {
    forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        loan: this.httpService.getLoans(),
        book: this.httpService.getBooks(),
        user: this.httpService.getUsers()
      }
    )
      // { google: object, microsoft: object, users: array }
      .subscribe(
        
        next => {
          this.isEmptyList = false
          
          //adatta le righe per la visualizzazione FE
          this.elementsAdapter(next)
  
        },
        error => {
          this.isEmptyList = true
  
          throw(error)
        }
      );
  }

  elementsAdapter(rawData: any) {
    let rawLoanList = rawData["loan"]
    let rawBookList = rawData["book"]
    let rawUserList = rawData["user"]
    //Pulisco la lista prima di inserire i nuovi valori
    this.loanList = []


    for (let loanRaw of rawLoanList) {
      const datainizio = loanRaw["datainizio"].split("T")[0]
      const datafine = loanRaw["datafine"].split("T")[0]

      //Recupera nome e cognome dell'utente conoscendo l'id_utente dalla fk di loan
      let filteredUser = rawUserList.find((rawUser: { id_utente: any; }) => rawUser.id_utente == loanRaw.fk_utente)
       
      //Recupera nome del libro conoscendo l'id_libro dalla fk di loan
      let filteredBook = rawBookList.find((rawBook: { id_libro: any; }) => rawBook.id_libro == loanRaw.fk_libro)

      let loan: ILoan = {
        "id": loanRaw["id_prestito"],
        "fullname": filteredUser["nome"] + " " + filteredUser["cognome"],
        "titolo_libro": filteredBook["titolo"],
        "datainizio": datainizio,
        "datafine": datafine
      }

      this.loanList.push(loan)
    }
  }

  ngOnDestroy() {
    if (this.httpSubscription) this.httpSubscription.unsubscribe()
  }

  updateLoan(id: number) {

    let payload = {"id_prestito": id}

    this.httpService.updateLoan(payload).subscribe({
      next: (response: any) =>  {
        window.alert("Il prestito è stato modificato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NEL MODIFICARE IL PRESTITO")


        throw(error)
      }
    })
  }

  deleteLoan(id: number) {
    let payload = {"id_prestito": id}

    this.httpService.updateLoan(payload).subscribe({
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
