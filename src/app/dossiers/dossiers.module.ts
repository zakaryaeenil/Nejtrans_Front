import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossiersRoutingModule } from './dossiers-routing.module';
import {DossierListComponent} from "./Dossier/dossier-list/dossier-list.component";
import {DossierImportComponent} from "./Dossier/dossier-import/dossier-import.component";
import {DossierExportComponent} from "./Dossier/dossier-export/dossier-export.component";
import {DossierEnattenteComponent} from "./Dossier/dossier-enattente/dossier-enattente.component";
import {DossierEntraitementComponent} from "./Dossier/dossier-entraitement/dossier-entraitement.component";
import {DossierCompletedComponent} from "./Dossier/dossier-completed/dossier-completed.component";
import { MyFoldersComponent } from './Dossier/my-folders/my-folders.component';
import {DossierCreateComponent} from "./Dossier/dossier-create/dossier-create.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        DossierListComponent,
        DossierImportComponent,
        DossierExportComponent,
        DossierEnattenteComponent,
        DossierEntraitementComponent,
        DossierCompletedComponent,
        MyFoldersComponent,
        DossierCreateComponent
    ],
    exports: [
        DossierListComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        DossiersRoutingModule
    ]
})
export class DossiersModule { }
