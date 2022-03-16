import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriComponent } from './autori/autori.component';
import { LibriComponent } from './libri/libri.component';
import { PrestitiComponent } from './prestiti/prestiti.component';

const routes: Routes = [
  { path: 'libri', component: LibriComponent },
  { path: 'autori', component: AutoriComponent },
  { path: 'prestiti', component: PrestitiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
