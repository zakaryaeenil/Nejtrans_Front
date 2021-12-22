import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier} from "../Models/dossier";
import {HelperForm} from "../Models/helper-form";



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

  // Get Folder By loggedIn Client
  getLoggedInClientFolders(type : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/client/myfolders/${type}`);
  }

  // Get Folder By loggedIn Client
  getLoggedInEmployeeFolders(type : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/employee/myfolders/${type}`);
  }

  // Get Free folders
  getFreeFolders() : Observable<Dossier[]>{
    return this.http.get<Dossier[]>("http://localhost:8080/api/employee/freefolders");
  }

  ReservedFolder(folder : Dossier): Observable<Object>{
    return this.http.patch(`http://localhost:8080/api/employee/bookfoolder/${folder.id}`,folder,{responseType: 'text'});
  }
  CompletedFolder(folder : Dossier): Observable<Object>{
    return this.http.patch(`http://localhost:8080/api/employee/terminer/${folder.id}`,folder,{responseType: 'text'});
  }

  Desabonner(folder : Dossier): Observable<Object>{
    return this.http.patch(`http://localhost:8080/api/employee/unbookfoolder/${folder.id}`,folder,{responseType: 'text'});
  }


  // define function to upload files
  upload(file: File ,type : string) {
    const document : FormData = new FormData();

    document.append("document", file,type);

   return this.http.post(`http://localhost:8080/api/documents/2/upload`, document , {
      responseType: 'json',});



  }

  ClientCreateFolder(dossier : HelperForm , files : File[]) {
    const formData = new FormData();
    const json = JSON.stringify(dossier);
    const blob = new Blob([json], {
      type: 'application/json'
    });

    formData.append("form", blob);
    for (var i = 0; i < files.length; i++) {

      formData.append("document", files[i]);

    }

     console.log(formData.get("form"));
    return this.http.post("http://localhost:8080/api/dossier/save",formData , {responseType : 'text' , headers : {
        'Accept':'application/octet-stream'}});

  }

  getDocuments(id : number) : Observable<Document[]>{
    return this.http.get<Document[]>(`http://localhost:8080/dossiers/${id}/documents`)
  }
  DownloadDocument(id : number) :Observable<Blob> {
    return this.http.get<Blob>(`http://localhost:8080/api/documents/${id}/download`,{ responseType: 'blob' as 'json' });
  }
}
