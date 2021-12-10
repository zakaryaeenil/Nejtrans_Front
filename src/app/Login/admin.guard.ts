import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private Auth : AuthService ,private router : Router) {
  }
  canActivate(){
    if (this.Auth.isAdmin()){
      return true;
    }
    alert("You must to be An admin to View this")
    this.Auth.logout();
   this.router.navigate(['login']);
     return false;
  }


}
