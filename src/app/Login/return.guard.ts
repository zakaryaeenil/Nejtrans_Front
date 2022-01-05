import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReturnGuard implements CanActivate {
  constructor(private Auth : AuthService ,private router : Router) {
  }
  canActivate(){
    if (this.Auth.isloggedIn){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
