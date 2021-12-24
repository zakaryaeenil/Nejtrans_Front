import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoComponent} from "./App/to-do/to-do.component";


const routes: Routes = [{path:'todo',component:ToDoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
