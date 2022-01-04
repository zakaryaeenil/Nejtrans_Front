import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../Models/user";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../Login/auth.service";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private HostUrl=environment.url;
  constructor(private http : HttpClient , private  Auth : AuthService) { }

  //Current User
  getCurrentUser() : Observable<User>{
    return this.http.get<User>(`${this.HostUrl}users/search/findByUsername?username=${this.Auth.loggedUser}`);
  }
}
