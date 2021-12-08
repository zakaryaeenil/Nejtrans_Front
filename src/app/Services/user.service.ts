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
  //Top Client
  getTopClients() : Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/users/search/findByRoles_Id?id=3&sort=CountDossiers,desc");
  }

// ALL Dossier Client
  getClientsDossiers(id : number) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/admin/user/${id}/folders`);
  }

  // ALL Dossier Client
  getClientsDossiersPerYear(id : number , year :number) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/admin/user/${id}/folder/${year}`);
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

  //ALL Employees
  getEmployees() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/users/search/findByRoles_Id?id=2");
  }

  //Top Employee
  getTopEmployees() : Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/users/search/findByRoles_Id?id=2&sort=countReservations,desc");
  }


  getEmployeeFoldercountByYear(username : string, id: number , year : number) : Observable<DossiersbyUserAndYear[]>{
    return this.http.get<DossiersbyUserAndYear[]>(`http://localhost:8080/api/admin/employee/${username}/folders/${id}/${year}`);
  }

  getEmployeeFoldercountPerType(username : string, type: string) : Observable<number>{
    return this.http.get<number>(`http://localhost:8080/api/admin/employee/${username}/folders/${type}`);
  }


  //Count Dashboard Stats
  getDashboardcountStats(type : string) : Observable<number>{
    return this.http.get<number>(`http://localhost:8080/api/admin/dossiers/count/${type}`);
  }

  // Stats All Folders By year
  getAllFolderbyYear(year : number) : Observable<DossiersbyUserAndYear[]>{
    return this.http.get<DossiersbyUserAndYear[]>(`http://localhost:8080/api/admin/dossiers/count/total/${year}`);
  }
  //stats
  getClientsDossiersTypePerYear(id: number , type: string , year :number) : Observable<Dossier[]>{
    return  this.http.get<Dossier[]>(`http://localhost:8080/api/admin/user/${id}/folders/${type}/${year}`);
  }

  getEmployeeFoldercountPerTypeWithYear(username :string , type : string , year :number) : Observable<number>{
    return this.http.get<number>(`http://localhost:8080/api/admin/employee/${username}/count/${type}/${year}`);
  }


  getDashboardDossiersTypeAndYear(type :string , year : number) : Observable<number>{
    return this.http.get<number>(`http://localhost:8080/api/admin/folders/${type}/${year}`);
  }

  createUser(user: User): Observable<Object>{
    return this.http.post(`http://localhost:8080/api/admin/user/create/role/3`, user);
  }
  createEmployee(user: User): Observable<Object>{
    return this.http.post(`http://localhost:8080/api/admin/user/create/role/2`, user);
  }
// ALL Dossier Client
  getEmployeeDossiers(username : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`http://localhost:8080/api/admin/employee/${username}/folders`);
  }
//Delete Dossier
  DeleteClient(id: number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/users/${id}`,{responseType: 'text'});
  }
}
