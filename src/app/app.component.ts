import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./Login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {
  title = 'Admin';
public isLogged : boolean;
  constructor(private Auth : AuthService) {
    this.isLogged = this.Auth.isLoggedin;
  }

}
