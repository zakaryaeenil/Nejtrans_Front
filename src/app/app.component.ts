import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./Login/auth.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'Admin';
  isLoggedin: boolean;
  user:string
public isLogged : boolean;

  // @ts-ignore
  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.user=this.authService.loggedUser;
    if (this.authService.getToken() == null ||
      this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }

}
