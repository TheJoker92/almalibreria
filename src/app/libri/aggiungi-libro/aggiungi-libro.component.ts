import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { IBook } from 'src/app/interfaces/IBook';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-aggiungi-libro',
  templateUrl: './aggiungi-libro.component.html',
  styleUrls: ['./aggiungi-libro.component.scss']
})
export class AggiungiLibroComponent implements OnInit {
  formBook: FormGroup = new FormGroup({
    titolo: new FormControl(''),
    trama: new FormControl(''),
    pagine: new FormControl(''),
    datapubblicazione: new FormControl(''),
  });

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {}

  addBook() {
    let payLoad=this.buildPayLoad()
    console.log(payLoad)
    this.httpService.addBook(payLoad).subscribe({
      next: () => {
        
        window.alert("Libro aggiunto correttamente")

        location.reload()
      },
      error: () => {
        window.alert("Errore nell'aggiunta libro")
      }
    })


  }

  
  buildPayLoad() {
    let payLoad = {
      titolo: this.formBook.value.titolo,
      trama: this.formBook.value.trama,
      pagine: this.formBook.value.pagine,
      datapubblicazione: new Date( this.formBook.value.datapubblicazione)
    }
    return payLoad

  }


}
