import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-create',
  templateUrl: './dossier-create.component.html',
  styleUrls: ['./dossier-create.component.css']
})
export class DossierCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/libs/jquery-3.1.1.min.js',
      'assets/bootstrap/js/popper.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
      'assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
      'assets/assets/js/app.js',
      'assets/assets/js/custom.js',
      'assets/plugins/dropify/dropify.min.js',
      'assets/assets/js/apps/invoice-add.js',
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
