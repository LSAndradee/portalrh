import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtestadoComponent } from './atestado/atestado.component';

const routes: Routes = [
  { path: '', component: AtestadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtestadoRoutingModule { }
