import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminGuard} from "./Login/admin.guard";
import {DossierEnattenteComponent} from "./Admin/Dossier/dossier-enattente/dossier-enattente.component";
import {DossierCreateComponent} from "./Admin/Dossier/dossier-create/dossier-create.component";
import {DossierExportComponent} from "./Admin/Dossier/dossier-export/dossier-export.component";
import {ToDoComponent} from "./App/to-do/to-do.component";
import {EmployeeDetailsComponent} from "./Admin/User/employee-details/employee-details.component";
import {DossierEntraitementComponent} from "./Admin/Dossier/dossier-entraitement/dossier-entraitement.component";
import {DossierListComponent} from "./Admin/Dossier/dossier-list/dossier-list.component";
import {ClientDetailsComponent} from "./Admin/User/client-details/client-details.component";
import {DossierImportComponent} from "./Admin/Dossier/dossier-import/dossier-import.component";
import {DossierCompletedComponent} from "./Admin/Dossier/dossier-completed/dossier-completed.component";
import {LoginFormComponent} from "./Login/login-form/login-form.component";
import {EmployeeListComponent} from "./Admin/User/employee-list/employee-list.component";
import {ClientListComponent} from "./Admin/User/client-list/client-list.component";
import {DashboardComponent} from "./Admin/Dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'Admin',
    children: [
      {path:'dossiers',component:DossierListComponent},
      {path:'export',component:DossierExportComponent},
      {path:'import',component:DossierImportComponent},
      {path:'enattente',component:DossierEnattenteComponent},
      {path:'entraitement',component:DossierEntraitementComponent},
      {path:'completed',component:DossierCompletedComponent},
      {path:'clients',component:ClientListComponent},
      {path:'employees',component:EmployeeListComponent},
      {path:'create',component:DossierCreateComponent},
      {path:'client/:id/details',component:ClientDetailsComponent},
      {path:'employee/:id/:username/details',component:EmployeeDetailsComponent},
      {path:'todo',component:ToDoComponent},
      {path:'',component:DashboardComponent},
      // other children or you can use loadChildren
    ],
  },
  {path:'login',component:LoginFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
