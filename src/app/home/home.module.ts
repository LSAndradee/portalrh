import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
