import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DossierListComponent } from './Dossier/dossier-list/dossier-list.component';
import {HttpClientModule} from "@angular/common/http";
import { DossierImportComponent } from './Dossier/dossier-import/dossier-import.component';
import { DossierExportComponent } from './Dossier/dossier-export/dossier-export.component';
import { DossierEnattenteComponent } from './Dossier/dossier-enattente/dossier-enattente.component';
import { DossierEntraitementComponent } from './Dossier/dossier-entraitement/dossier-entraitement.component';
import { DossierCompletedComponent } from './Dossier/dossier-completed/dossier-completed.component';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { ClientListComponent } from './User/client-list/client-list.component';
import { EmployeeListComponent } from './User/employee-list/employee-list.component';
import { DossierCreateComponent } from './Dossier/dossier-create/dossier-create.component';
import { EmployeeDetailsComponent } from './User/employee-details/employee-details.component';
import { ClientDetailsComponent } from './User/client-details/client-details.component';
import { NavbarComponent } from './Helpers/navbar/navbar.component';
import { SidebarComponent } from './Helpers/sidebar/sidebar.component';
import { ToDoComponent } from './App/to-do/to-do.component';
import { NotesComponent } from './App/notes/notes.component';
import {ChartsModule} from "ng2-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableViewComponent } from './User/client-details/table-view/table-view.component';




@NgModule({
  declarations: [
    AppComponent,
    DossierListComponent,
    DossierImportComponent,
    DossierExportComponent,
    DossierEnattenteComponent,
    DossierEntraitementComponent,
    DossierCompletedComponent,
    LoginFormComponent,
    ClientListComponent,
    EmployeeListComponent,
    DossierCreateComponent,
    EmployeeDetailsComponent,
    ClientDetailsComponent,
    NavbarComponent,
    SidebarComponent,
    ToDoComponent,
    NotesComponent,
    DashboardComponent,
    TableViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
