import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  user = new User();
  err:number = 0;
  constructor(private authService : AuthService,
              public router: Router) { }

  ngOnInit(): void {
    this.loadScripts();
  }

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


  // javascript scripts affichage
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/authentication/form-1.js'
      //Load all your script files here'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }


}
