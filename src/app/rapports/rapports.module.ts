import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportsRoutingModule } from './rapports-routing.module';
import { ClientsRapportComponent } from './clients-rapport/clients-rapport.component';
import { EntrepriseRapportComponent } from './entreprise-rapport/entreprise-rapport.component';
import { AgentsRapportComponent } from './agents-rapport/agents-rapport.component';
import {ChartsModule} from "ng2-charts";
import { TableViewentrepriseComponent } from './entreprise-rapport/table-viewentreprise/table-viewentreprise.component';




@NgModule({
  declarations: [
    ClientsRapportComponent,
    EntrepriseRapportComponent,
    AgentsRapportComponent,
    TableViewentrepriseComponent,
  ],
  imports: [
    CommonModule,
    RapportsRoutingModule,
    ChartsModule
  ]
})
export class RapportsModule { }
