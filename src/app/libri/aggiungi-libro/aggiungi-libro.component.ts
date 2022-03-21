import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';


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

  display = false

  constructor(private httpService: HttpServiceService,
              private confirmDeleteDialogService: ConfirmationService,
              private dialogModule: DialogModule) { }

  ngOnInit(): void {}

  closeDialog() {
    this.display = false
  }

  addBook() {
    let payLoad=this.buildPayLoad()

    this.httpService.addBook(payLoad).subscribe({
      next: () => {
        
        window.alert("Libro aggiunto correttamente")

        location.reload()

        this.display = false
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

  openDialog() {
    this.display = true
  }


}
