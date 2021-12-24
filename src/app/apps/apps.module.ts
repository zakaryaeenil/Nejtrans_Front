import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import {ToDoComponent} from "./App/to-do/to-do.component";



@NgModule({
  declarations: [
   ToDoComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
