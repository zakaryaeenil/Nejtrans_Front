import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsRapportComponent} from "./clients-rapport/clients-rapport.component";
import {EntrepriseRapportComponent} from "./entreprise-rapport/entreprise-rapport.component";
import {AgentsRapportComponent} from "./agents-rapport/agents-rapport.component";


const routes: Routes = [
  {path:'clients',component:ClientsRapportComponent },
  {path:'entreprise',component:EntrepriseRapportComponent },
  {path:'agents',component:AgentsRapportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportsRoutingModule { }
