import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    AppMaterialModule
  ]
})
export class HeaderModule { }
