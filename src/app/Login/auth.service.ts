import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private HostUrl=environment.url;
  token:string;
  public loggedUser:string;
  public isloggedIn: boolean = false ;
  public roles:string[];
  private helper = new JwtHelperService();
  constructor(private router : Router , private http : HttpClient) { }

  login(user : User){
    return this.http.post(`${this.HostUrl}api/auth/login`, user,  {observe : "response"});
  }
  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }

  decodeJWT()
  {   if (this.token == undefined){
        return;
         }
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.isloggedIn = true;
    this.loggedUser = decodedToken.sub;
  }

  forgot(email :string){
    return this.http.put(`${this.HostUrl}api/auth/resetpassword/${email}`,email, {responseType: 'text'});
  }


  loadToken() {
    this.token  = localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken():string {
    return this.token;
  }

  logout() {
    this.loggedUser = "";
    this.roles = [];
    this.token= "";
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }



  isAdmin():boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >=0;
  }
  isClient():boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('USER') >=0;
  }
  isEmployee():boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('EMPLOYEE') >=0;
  }


  isTokenExpired(): boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
  }
}
