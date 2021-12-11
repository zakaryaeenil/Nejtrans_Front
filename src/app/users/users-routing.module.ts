import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientDetailsComponent} from "./User/client-details/client-details.component";
import {EmployeeListComponent} from "./User/employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./User/employee-details/employee-details.component";
import {ClientListComponent} from "./User/client-list/client-list.component";

const routes: Routes = [
  {path:'clients',component:ClientListComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'client/:id/details',component:ClientDetailsComponent},
  {path:'employee/:id/:username/details',component:EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
