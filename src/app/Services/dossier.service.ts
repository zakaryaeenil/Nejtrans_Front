import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier} from "../Models/dossier";


@Injectable({
  providedIn: 'root'
})
export class DossierService {

  constructor(private http : HttpClient) { }

  //All Dossier
  getAllDossiers() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/api/dossier/all");
  }

  //Import Dossier
  getDossiersImport() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/dossiers/search/findByTypeDossier?TypeDossier=Import");
  }

  //Export Dossier
  getDossiersExport() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/dossiers/search/findByTypeDossier?TypeDossier=Export");
  }

  //En attente Dossier
  getDossiersEnAttent() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/dossiers/search/findByAvailable?available=1");
  }

  //En traitement Dossier
  getDossiersEntraitement() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/dossiers/search/findByAvailable?available=2");
  }

  //Completed Dossier
  getDossiersCompleted() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/dossiers/search/findByAvailable?available=3");
  }

  //Delete Dossier
  DeleteDossier(id: number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/dossier/${id}`,{responseType: 'text'});
  }
}
