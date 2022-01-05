import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgotform',
  templateUrl: './forgotform.component.html',
  styleUrls: ['./forgotform.component.css'],
})
export class ForgotformComponent implements OnInit {

  constructor(private Auth: AuthService , private router : Router) { }

  err : number =0;
  email : string;
  result : any;
  ngOnInit(): void {
    this.loadScripts();
  }


  forgotPassword(email :string){
    this.Auth.forgot(email).subscribe(data => {
      this.err = 2;
    } ,
    (err)=>{   this.err = 1;} );

  }
  // javascript scripts affichage
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/libs/jquery-3.1.1.min.js',
      'assets/bootstrap/js/popper.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
      'assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
      'assets/assets/js/app.js',
      'assets/app_init.js',
      'assets/assets/js/custom.js',
      'assets/assets/js/authentication/form-2.js'
      //Load all your script files here'
    ];
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }


}
