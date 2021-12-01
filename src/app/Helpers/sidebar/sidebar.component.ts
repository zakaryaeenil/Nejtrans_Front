import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Login/auth.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public isLogged : boolean;
  constructor(private Auth : AuthService) {
    this.isLogged = this.Auth.isLoggedin;
  }


}
