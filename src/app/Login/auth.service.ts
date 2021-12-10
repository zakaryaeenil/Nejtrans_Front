import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/user";
import {observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string;
  public loggedUser:string;
  public isloggedIn: boolean = false ;
  public roles:string[];
  private helper = new JwtHelperService();

  constructor(private router : Router , private http : HttpClient) { }

  login(user : User){
    return this.http.post("http://localhost:8080/api/auth/login", user,  {observe : "response"});
  }
  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    console.log(this.isloggedIn);
    this.decodeJWT();
  }

  decodeJWT()
  {   if (this.token == undefined)
    return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.isloggedIn = true;
    this.loggedUser = decodedToken.sub;
    console.log(this.loggedUser);
  }



  loadToken() {
    this.token = <string>localStorage.getItem('jwt');
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



  isAdmin():Boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >=0;
  }
  isClient():Boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('USER') >=0;
  }
  isEmployee():Boolean{
    if (!this.roles)
      return false;
    return this.roles.indexOf('EMPLOYEE') >=0;
  }


  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(login :string){

  }
}
