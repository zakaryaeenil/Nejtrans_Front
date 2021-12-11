import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ClientDetailsComponent} from "./User/client-details/client-details.component";
import {EmployeeListComponent} from "./User/employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./User/employee-details/employee-details.component";
import {ClientListComponent} from "./User/client-list/client-list.component";
import {TableViewComponent} from "./User/client-details/table-view/table-view.component";
import {TableViewEmployeeComponent} from "./User/employee-details/table-view-employee/table-view-employee.component";
import {ChartsModule} from "ng2-charts";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlatpickrModule} from "angularx-flatpickr";



@NgModule({
  declarations: [
    ClientListComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ClientDetailsComponent,
    TableViewComponent,
    TableViewEmployeeComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
  ]
})
export class UsersModule { }
