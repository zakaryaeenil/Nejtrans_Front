import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";
import {Dossier} from "../Models/dossier";
import {DossiersbyUserAndYear} from "../Models/dossiersby-user-and-year";


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http : HttpClient) { }


  //ALL Clients
  getClients() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/users/search/findByRoles_Id?id=3");
  }

  //ALL Employees
  getEmployees() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/users/search/findByRoles_Id?id=2");
  }

// ALL Dossier Client
  getClientsDossiers(id : number) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/admin/user/${id}/folders`);
  }
  // ALL Dossier Client with type
  getClientsDossiersType(id : number, type :string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/admin/user/${id}/dossiers/${type}`);
  }

  //ALL Client with id
  getClientInfo(id : number) : Observable<User>{
    return this.http.get<User>(`http://localhost:8080/users/${id}`);
  }

  getClientFolderCount(id : number ,year : number) : Observable<DossiersbyUserAndYear[]>{
    return  this.http.get<DossiersbyUserAndYear[]>(`http://localhost:8080/api/admin/user/${id}/folders/${year}`);
  }


}
