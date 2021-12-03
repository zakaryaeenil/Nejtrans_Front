import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }

  // javascript scripts affichage
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/libs/jquery-3.1.1.min.js',
      'assets/bootstrap/js/popper.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
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
