import { FeriasComponent } from './ferias/ferias/ferias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home/home.component';
import { AtestadoComponent } from '../app/atestado/atestado/atestado.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'atestado', component: AtestadoComponent },
  { path: 'ferias', component: FeriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
