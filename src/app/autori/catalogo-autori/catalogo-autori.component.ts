import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { IUser } from 'src/app/interfaces/IUser';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-catalogo-autori',
  templateUrl: './catalogo-autori.component.html',
  styleUrls: ['./catalogo-autori.component.scss']
})
export class CatalogoAutoriComponent implements OnInit {

  
  httpSubscription: Subscription | undefined

  authorList: IAuthor[] = []
  isEmptyList: boolean = true // Messaggio da mostrare all'utente

  keys: string[] = []

  constructor(private httpService: HttpServiceService,
              private confirmDeleteDialogService: ConfirmationService,
              private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.isEmptyList = false
    let authorList: any[] = [{
      id: 1,
      nome: "ale",
      cognome: "dem",
      username: "number",
      datadinascita: "1992-12-28",
      fk_tipoutente: "1"
    }]


    this.loaderService.display = true
    this.httpSubscription = this.httpService.getAuthors().subscribe({
      next: (authorList: IAuthor[]) => {
        this.loaderService.display = false
        this.isEmptyList = false

        //adatta le righe per la visualizzazione FE
        this.authorList = authorList
      },
      error: (error: any) => {
        this.isEmptyList = true
        this.loaderService.display = false

        throw(error)
      }
    })
  }

  ngOnDestroy() {
    if (this.httpSubscription) this.httpSubscription.unsubscribe()
  }

  updateAuthor(id: number) {
    this.httpService.updateAuthor(id).subscribe({
      next: (response: any) => {
        window.alert("L'autore è stato modificato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NEL MODIFICARE L'AUTORE")


        throw (error)
      }
    })
  }

  openDeleteDialog(author: IAuthor) {
    this.confirmDeleteDialogService.confirm({
      message: `Sei sicuro di voler eliminare l'autore <strong>${author.nome} ${author.cognome}</strong> ?`,
      accept: () => {
        this.deleteAuthor(author.id)
      }

    })
  }

  deleteAuthor(id: number) {
    this.httpService.updateAuthor(id).subscribe({
      next: (response: any) => {
        window.alert("L'autore è stato eliminato")

        location.reload()
      },
      error: (error: any) => {
        window.alert("ERRORE NELL' ELIMINARE L'AUTORE")


        throw (error)
      }
    })
  }


}
