import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../Login/auth.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {




  constructor(public Auth : AuthService) {}

}
