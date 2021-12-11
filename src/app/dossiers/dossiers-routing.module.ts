import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DossierListComponent} from "./Dossier/dossier-list/dossier-list.component";
import {DossierEnattenteComponent} from "./Dossier/dossier-enattente/dossier-enattente.component";
import {DossierImportComponent} from "./Dossier/dossier-import/dossier-import.component";
import {DossierCompletedComponent} from "./Dossier/dossier-completed/dossier-completed.component";
import {DossierExportComponent} from "./Dossier/dossier-export/dossier-export.component";
import {DossierEntraitementComponent} from "./Dossier/dossier-entraitement/dossier-entraitement.component";
import {DossierCreateComponent} from "./Dossier/dossier-create/dossier-create.component";
import {MyFoldersComponent} from "./Dossier/my-folders/my-folders.component";

const routes: Routes = [
  {path:'all',component:DossierListComponent},
  {path:'export',component:DossierExportComponent},
  {path:'import',component:DossierImportComponent},
  {path:'enattente',component:DossierEnattenteComponent},
  {path:'entraitement',component:DossierEntraitementComponent},
  {path:'completed',component:DossierCompletedComponent},
  {path :'create' , component:DossierCreateComponent},
  {path :'myfolders' , component:MyFoldersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossiersRoutingModule { }
