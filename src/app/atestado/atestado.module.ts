import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtestadoRoutingModule } from './atestado-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AtestadoRoutingModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class AtestadoModule { }


