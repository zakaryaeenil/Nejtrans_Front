import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Login/auth.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public Auth : AuthService) {
  }
  onLogout() {
    this.Auth.logout();
  }
}
