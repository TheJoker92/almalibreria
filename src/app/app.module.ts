import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoLibriComponent } from './libri/catalogo-libri/catalogo-libri.component';
import { MenuPrincipaleComponent } from './menu-principale/menu-principale.component';
import { LibriComponent } from './libri/libri.component';
import { AutoriComponent } from './autori/autori.component';
import { PrestitiComponent } from './prestiti/prestiti.component';
import { HttpServiceService } from './services/http-service.service';
import { AggiungiLibroComponent } from './libri/aggiungi-libro/aggiungi-libro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoPrestitiComponent } from './prestiti/catalogo-prestiti/catalogo-prestiti.component';
import { AggiungiPrestitoComponent } from './prestiti/aggiungi-prestito/aggiungi-prestito.component';
import { CatalogoAutoriComponent } from './autori/catalogo-autori/catalogo-autori.component';
import { AggiungiAutoreComponent } from './autori/aggiungi-autore/aggiungi-autore.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoLibriComponent,
    MenuPrincipaleComponent,
    LibriComponent,
    AutoriComponent,
    PrestitiComponent,
    AggiungiLibroComponent,
    CatalogoPrestitiComponent,
    AggiungiPrestitoComponent,
    CatalogoAutoriComponent,
    AggiungiAutoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
