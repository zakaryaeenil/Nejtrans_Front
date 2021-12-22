import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../Models/user";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../Login/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient , private  Auth : AuthService) { }

  //Current User
  getCurrentUser() : Observable<User>{
    return this.http.get<User>(`http://localhost:8080/users/search/findByUsername?username=${this.Auth.loggedUser}`);
  }
}
