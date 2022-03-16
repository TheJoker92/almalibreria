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
    dataPubblicazione: new FormControl(''),
  });

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {}

  addBook() {
    this.httpService.addBook(this.formBook.value).subscribe({
      next: () => {
        window.alert("Libro aggiunto correttamente")

        location.reload()
      },
      error: () => {
        window.alert("Errore nell'aggiunta libro")
      }
    })

  }

}
