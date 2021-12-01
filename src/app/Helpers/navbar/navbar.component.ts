import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Login/auth.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isLogged : boolean;
  constructor(private Auth : AuthService) {
    this.isLogged = this.Auth.isLoggedin;
  }

}
