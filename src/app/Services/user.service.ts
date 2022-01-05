import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";
import {Dossier} from "../Models/dossier";
import {AuthService} from "../Login/auth.service";
import {ChartsModel} from "../Models/charts-model";
import {environment} from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private HostUrl=environment.url;

  constructor(private http : HttpClient ,  private Auth : AuthService) { }

  //Current User
  getCurrentUser() : Observable<User>{
    return this.http.get<User>(`${this.HostUrl}users/search/findByUsername?username=${this.Auth.loggedUser}`);
  }

  //Count Folders Employee
  getCountFoldersEmployee(type : string) :Observable<number>{
    return this.http.get<number>(`${this.HostUrl}api/employee/myfolders/count/${type}`);
  }
  //Count Folders Employee
  getCountFoldersClient(type : string) :Observable<number>{
    return this.http.get<number>(`${this.HostUrl}api/client/myfolders/count/${type}`);
  }
  //ALL Clients
  getClients() : Observable<User[]>{
    return this.http.get<User[]>(`${this.HostUrl}users/search/findByRoles_Id?id=3`);
  }
  //Top Client
  getTopClients() : Observable<any[]>{
    return this.http.get<any[]>(`${this.HostUrl}users/search/findByRoles_Id?id=3&sort=CountDossiers,desc`);
  }

// ALL Dossier Client
  getClientsDossiers(id : number) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/admin/user/${id}/folders`);
  }

  // ALL Dossier Client
  getClientsDossiersPerYear(id : number , year :number) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/admin/user/${id}/folder/${year}`);
  }
  // ALL Dossier Client with type
  getClientsDossiersType(id : number, type :string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/admin/user/${id}/dossiers/${type}`);
  }

  //ALL Client with id
  getClientInfo(id : number) : Observable<User>{
    return this.http.get<User>(`${this.HostUrl}users/${id}`);
  }
  //ALL Client with id
  getEmployeeInfo(username : string) : Observable<User>{
    return this.http.get<User>(`${this.HostUrl}users/search/findByUsername?username=${username}`);
  }

  getClientFolderCount(id : number ,year : number) : Observable<ChartsModel[]>{
    return  this.http.get<ChartsModel[]>(`${this.HostUrl}api/admin/charts/${id}/${year}/all`);
  }

  //ALL Employees
  getEmployees() : Observable<User[]>{
    return this.http.get<User[]>(`${this.HostUrl}users/search/findByRoles_Id?id=2`);
  }

  //Top Employee
  getTopEmployees() : Observable<any[]>{
    return this.http.get<any[]>(`${this.HostUrl}users/search/findByRoles_Id?id=2&sort=countReservations,desc`);
  }


  getEmployeeFoldercountByYear(username : string, year : number) : Observable<ChartsModel[]>{
    return this.http.get<ChartsModel[]>(`${this.HostUrl}api/admin/chartsemployee/${username}/${year}`);
  }

  getEmployeeFoldercountPerType(username : string, type: string) : Observable<number>{
    return this.http.get<number>(`${this.HostUrl}admin/employee/${username}/folders/${type}`);
  }


  //Count Dashboard Stats
  getDashboardcountStats(type : string) : Observable<number>{
    return this.http.get<number>(`${this.HostUrl}api/admin/dossiers/count/${type}`);
  }

  // Stats All Folders By year
  getAllFolderbyYear(year : number) : Observable<ChartsModel[]>{
    return this.http.get<ChartsModel[]>(`${this.HostUrl}api/admin/charts/${year}/all`);
  }
  //stats
  getClientsDossiersTypePerYear(id: number , type: string , year :number) : Observable<Dossier[]>{
    return  this.http.get<Dossier[]>(`${this.HostUrl}api/admin/user/${id}/folders/${type}/${year}`);
  }

  getEmployeeFoldercountPerTypeWithYear(username :string , type : string , year :number) : Observable<number>{
    return this.http.get<number>(`${this.HostUrl}api/admin/employee/${username}/count/${type}/${year}`);
  }


  getDashboardDossiersTypeAndYear(type :string , year : number) : Observable<number>{
    return this.http.get<number>(`${this.HostUrl}api/admin/folders/${type}/${year}`);
  }

  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.HostUrl}api/admin/user/create/role/3`, user);
  }
  createEmployee(user: User): Observable<Object>{
    return this.http.post(`${this.HostUrl}api/admin/user/create/role/2`, user);
  }
// ALL Dossier Client
  getEmployeeDossiers(username : string) : Observable<Dossier[]>{
    return this.http.get<Dossier[]>(`${this.HostUrl}api/admin/employee/${username}/folders`);
  }
//Delete Dossier
  DeleteClient(id: number) : Observable<any>{
    return this.http.delete(`${this.HostUrl}users/${id}`,{responseType: 'text'});
  }
}
