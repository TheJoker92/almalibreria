import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { LoaderService } from 'src/app/services/loader.service';


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

  displayAddBookModal = false

  constructor(private httpService: HttpServiceService,
              public loaderService: LoaderService) { }

  ngOnInit(): void {}

  closeDialog() {
    this.displayAddBookModal = false
  }

  addBook() {
    let payLoad=this.buildPayLoad()

    this.loaderService.display = true

    this.httpService.addBook(payLoad).subscribe({
      next: () => {
        
        window.alert("Libro aggiunto correttamente")

        location.reload()

        this.displayAddBookModal = false
        this.loaderService.display = false
      },
      error: () => {
        window.alert("Errore nell'aggiunta libro")

        this.loaderService.display = false
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

  openDialog() {
    this.displayAddBookModal = true
  }


}
