import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    AppMaterialModule
  ]
})
export class FooterModule { }
