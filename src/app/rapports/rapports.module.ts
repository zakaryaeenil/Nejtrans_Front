import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportsRoutingModule } from './rapports-routing.module';
import { ClientsRapportComponent } from './clients-rapport/clients-rapport.component';
import { EntrepriseRapportComponent } from './entreprise-rapport/entreprise-rapport.component';
import { AgentsRapportComponent } from './agents-rapport/agents-rapport.component';



@NgModule({
  declarations: [
    ClientsRapportComponent,
    EntrepriseRapportComponent,
    AgentsRapportComponent
  ],
  imports: [
    CommonModule,
    RapportsRoutingModule
  ]
})
export class RapportsModule { }
