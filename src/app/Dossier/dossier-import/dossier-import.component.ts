import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../Services/dossier.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-import',
  templateUrl: './dossier-import.component.html',
  styleUrls: ['./dossier-import.component.css']
})
export class DossierImportComponent implements OnInit {


  doss_import : any;
  public comp = 3;
  public enatt = 1;
  public entrai = 2;


  constructor( private service : DossierService ) {
  }


  ngOnInit(): void {


    this.getDossierImport();

  }

  getDossierImport(){
    this.service.getDossiersImport().subscribe(
      data =>{
        this.doss_import = data;
        this.doss_import = this.doss_import._embedded.dossiers;
        this.loadScripts();
        console.log(this.doss_import);
      });
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
