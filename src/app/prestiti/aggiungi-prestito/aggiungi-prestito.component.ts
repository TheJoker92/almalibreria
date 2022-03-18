import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-aggiungi-prestito',
  templateUrl: './aggiungi-prestito.component.html',
  styleUrls: ['./aggiungi-prestito.component.scss']
})
export class AggiungiPrestitoComponent implements OnInit {

  id_user = 1 //HARDCODED

  bookList: any[] = []

  formLoan: FormGroup = new FormGroup({
    book: new FormControl('', Validators.required),
    datainizio: new FormControl('', Validators.required),
    datafine: new FormControl('', Validators.required),
  });

  $bookList: Subscription | undefined

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.$bookList = this.httpService.getBookAuthor().subscribe({
      next: (bookList: any[]) => {
        
        //adatta le righe per la visualizzazione FE
        this.bookList = bookList

      },
      error: (error: any) => {
        this.bookList = []

        throw(error)
      }
    })
  }

  addLoan() {
    let payLoad=this.buildPayLoad()
      console.log(payLoad)
    if (this.formLoan.valid) {
      let payLoad=this.buildPayLoad()
      console.log(payLoad)
      this.httpService.addLoan(payLoad).subscribe({
        next: () => {
          
          window.alert("Prestito aggiunto correttamente")
  
          location.reload()
        },
        error: () => {
          window.alert("Errore nell'aggiunta prestito")
        }
      })
    } else {
      window.alert("Inserire tutti i campi")
    }


  }

  
  buildPayLoad() {
    let payLoad = {
      fk_utente: this.id_user,
      fk_libro: this.formLoan.value.book.id_libro,
      datainizio: new Date( this.formLoan.value.datainizio),
      datafine: new Date( this.formLoan.value.datafine)
    }

    return payLoad  
  }

}
