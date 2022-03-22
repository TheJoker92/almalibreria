import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-aggiungi-autore',
  templateUrl: './aggiungi-autore.component.html',
  styleUrls: ['./aggiungi-autore.component.scss']
})
export class AggiungiAutoreComponent implements OnInit {

  formAuthor: FormGroup = new FormGroup({
    titolo: new FormControl(''),
    trama: new FormControl(''),
    pagine: new FormControl(''),
    datapubblicazione: new FormControl(''),
  });

  displayAddAuthorModal = false

  constructor(private httpService: HttpServiceService,
              public loaderService: LoaderService) { }

  ngOnInit(): void {}

  closeDialog() {
    this.displayAddAuthorModal = false
  }

  addAuthor() {
    let payLoad=this.buildPayLoad()

    this.loaderService.display = true

    this.httpService.addAuthor(payLoad).subscribe({
      next: () => {
        
        window.alert("Libro aggiunto correttamente")

        location.reload()

        this.displayAddAuthorModal = false
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
      titolo: this.formAuthor.value.titolo,
      trama: this.formAuthor.value.trama,
      pagine: this.formAuthor.value.pagine,
      datapubblicazione: new Date( this.formAuthor.value.datapubblicazione)
    }
    return payLoad

  }

  openDialog() {
    this.displayAddAuthorModal = true
  }


}
