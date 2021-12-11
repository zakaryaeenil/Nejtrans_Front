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
import { DashboardComponent } from './Dashboard/dashboard.component';
import { TableViewComponent } from './User/client-details/table-view/table-view.component';
import { CallendarviewComponent } from './Dashboard/callendarview/callendarview.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FlatpickrModule} from "angularx-flatpickr";
import { TableViewEmployeeComponent } from './User/employee-details/table-view-employee/table-view-employee.component';
import {authInterceptorProviders} from "./Login/interceptor.service";
import {UserService} from "./Services/user.service";
import {AuthService} from "./Login/auth.service";


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
    CallendarviewComponent,
    TableViewEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CommonModule,
  ],
  providers: [authInterceptorProviders,AuthService ,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
