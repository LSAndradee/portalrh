import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeriasRoutingModule } from './ferias-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    FeriasRoutingModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class FeriasModule { }
