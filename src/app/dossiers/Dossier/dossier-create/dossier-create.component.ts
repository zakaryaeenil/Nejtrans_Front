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
      'assets/plugins/table/datatable/datatables.js',
      'assets/plugins/table/datatable/button-ext/dataTables.buttons.min.js',
      'assets/plugins/table/datatable/button-ext/jszip.min.js',
      'assets/plugins/table/datatable/button-ext/buttons.html5.min.js',
      'assets/plugins/table/datatable/button-ext/buttons.print.min.js',
      'assets/export_table.js',
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
