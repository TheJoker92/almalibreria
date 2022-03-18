import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    this.httpSubscription = this.httpService.getLoanAuthor().subscribe({
      next: (loanList: ILoan[]) => {
        this.isEmptyList = false
        
        //adatta le righe per la visualizzazione FE
        this.elementsAdapter(loanList)

        //Prende i campi della tabella
        this.keys = Object.keys(loanList[0]) 
      },
      error: (error: any) => {
        this.isEmptyList = true

        throw(error)
      }
    })
  }

  elementsAdapter(loanList: any[]) {
    //Pulisco la lista prima di inserire i nuovi valori
    this.loanList = []


    for (let loanRaw of loanList) {
      const datainizio = loanRaw["datainizio"].split("T")[0]
      const datafine = loanRaw["datafine"].split("T")[0]


      let loan: ILoan = {
        "id": loanRaw["id_prestito"],
        "fullname": loanRaw["nome"] + " " + loanRaw["cognome"],
        "titolo_libro": loanRaw["titolo"],
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
