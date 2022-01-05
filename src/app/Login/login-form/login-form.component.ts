import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";

@Component({
  encapsulation :ViewEncapsulation.None,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent  {
  user = new User();
  err:number = 0;
  constructor(private authService : AuthService,
              public router: Router) { }

  onLoggedin()
  {
    this.authService.login(this.user).subscribe((data)=> {
      // @ts-ignore
      let jwToken = data.body["access_token"];
      if (jwToken != null) {
        this.authService.saveToken(jwToken);
      }
      this.router.navigate(['']);

    },(err)=>{   this.err = 1;
    });

  }



}
