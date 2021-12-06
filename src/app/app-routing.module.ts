import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DossierListComponent} from "./Dossier/dossier-list/dossier-list.component";
import {DossierExportComponent} from "./Dossier/dossier-export/dossier-export.component";
import {DossierImportComponent} from "./Dossier/dossier-import/dossier-import.component";
import {DossierEnattenteComponent} from "./Dossier/dossier-enattente/dossier-enattente.component";
import {DossierEntraitementComponent} from "./Dossier/dossier-entraitement/dossier-entraitement.component";
import {DossierCompletedComponent} from "./Dossier/dossier-completed/dossier-completed.component";
import {LoginFormComponent} from "./Login/login-form/login-form.component";
import {ClientListComponent} from "./User/client-list/client-list.component";
import {EmployeeListComponent} from "./User/employee-list/employee-list.component";
import {DossierCreateComponent} from "./Dossier/dossier-create/dossier-create.component";
import {ClientDetailsComponent} from "./User/client-details/client-details.component";
import {ToDoComponent} from "./App/to-do/to-do.component";
import {EmployeeDetailsComponent} from "./User/employee-details/employee-details.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";

const routes: Routes = [
  {path:'dossiers',component:DossierListComponent},
  {path:'export',component:DossierExportComponent},
  {path:'import',component:DossierImportComponent},
  {path:'enattente',component:DossierEnattenteComponent},
  {path:'entraitement',component:DossierEntraitementComponent},
  {path:'completed',component:DossierCompletedComponent},
  {path:'login',component:LoginFormComponent},
  {path:'clients',component:ClientListComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'create',component:DossierCreateComponent},
  {path:'client/:id/details',component:ClientDetailsComponent},
  {path:'employee/:id/:username/details',component:EmployeeDetailsComponent},
  {path:'todo',component:ToDoComponent},
  {path:'',component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
