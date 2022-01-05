import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier} from "../Models/dossier";
import {HelperForm} from "../Models/helper-form";
import {environment} from "../../environments/environment.prod";



@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private HostUrl=environment.url;
  constructor(private http : HttpClient) { }

  //All Dossier
  getAllDossiers() : Observable<Dossier[]>{
    const headers= new HttpHeaders()
      .set('content-type', 'application/json; charset = utf-8');

    return this.http.get<Dossier[]>(`${this.HostUrl}api/dossier/all`, {headers});
  }

  //Import Dossier
  getDossiersImport() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}dossiers/search/findByTypeDossier?TypeDossier=Import`);
  }

  //Export Dossier
  getDossiersExport() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}dossiers/search/findByTypeDossier?TypeDossier=Export`);
  }

  //En attente Dossier
  getDossiersEnAttent() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}dossiers/search/findByAvailable?available=1`);
  }

  //En traitement Dossier
  getDossiersEntraitement() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}dossiers/search/findByAvailable?available=2`);
  }

  //Completed Dossier
  getDossiersCompleted() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}dossiers/search/findByAvailable?available=3`);
  }

  //Delete Dossier
  DeleteDossier(id: number) : Observable<any>{
    return this.http.delete(`${this.HostUrl}api/dossier/${id}`,{responseType: 'text'});
  }

  // Get Folder By loggedIn Client
  getLoggedInClientFolders(type : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/client/myfolders/${type}`);
  }

  // Get Folder By loggedIn Client
  getLoggedInEmployeeFolders(type : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/employee/myfolders/${type}`);
  }

  // Get Free folders
  getFreeFolders() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/employee/freefolders`);
  }

  ReservedFolder(folder : Dossier): Observable<Object>{
    return this.http.patch(`${this.HostUrl}api/employee/bookfoolder/${folder.id}`,folder,{responseType: 'text'});
  }
  CompletedFolder(folder : Dossier): Observable<Object>{
    return this.http.patch(`${this.HostUrl}api/employee/terminer/${folder.id}`,folder,{responseType: 'text'});
  }

  Desabonner(folder : Dossier): Observable<Object>{
    return this.http.patch(`${this.HostUrl}api/employee/unbookfoolder/${folder.id}`,folder,{responseType: 'text'});
  }


  // define function to upload files
  upload(file: File ,type : string) {
    const document : FormData = new FormData();

    document.append("document", file,type);

   return this.http.post(`${this.HostUrl}api/documents/2/upload`, document , {
      responseType: 'json',});



  }

  ClientCreateFolder(dossier : HelperForm , files : File[]) {
    const formData = new FormData();
    const json = JSON.stringify(dossier);
    const blob = new Blob([json], {
      type: 'application/json'
    });

    formData.append("form", blob);
    for (let i of files) {

      formData.append("document",i);

    }

     console.log(formData.get("form"));
    return this.http.post(`${this.HostUrl}api/dossier/save`,formData , {responseType : 'text' , headers : {
        'Accept':'application/octet-stream'}});

  }

  ClientUpdateFolder(id :number, files : File[]) {
    const formData = new FormData();
    for (let i of files) {
      formData.append("document", i);
    }

    return this.http.put(`${this.HostUrl}api/dossier/${id}/update`,formData , {responseType : 'text' , headers : {
        'Accept':'application/octet-stream'}});

  }
  getDossier(id : number) : Observable<Dossier>{
    return this.http.get<Dossier>(`${this.HostUrl}dossiers/${id}`);
  }

  getDocuments(id : number) : Observable<Document[]>{
    return this.http.get<Document[]>(`${this.HostUrl}dossiers/${id}/documents`)
  }
  DownloadDocument(id : number) :Observable<Blob> {
    return this.http.get<Blob>(`${this.HostUrl}api/documents/${id}/downloadDB`,{ responseType: 'blob' as 'json' });
  }




}
