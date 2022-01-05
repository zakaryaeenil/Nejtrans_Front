import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../../Login/auth.service";
import {DossierService} from "../../../Services/dossier.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-table-viewentreprise',
  templateUrl: './table-viewentreprise.component.html',
  styleUrls: ['./table-viewentreprise.component.css']
})
export class TableViewentrepriseComponent implements OnInit {
  dossiers : any;
  public comp = 3;
  public enatt = 1;
  public entrai = 2;
  constructor( public  Auth : AuthService , private dossier_s : DossierService) { }

  ngOnInit(): void {
    this.getDossiersALl();
  }
// Afficher tout Dossier
  getDossiersALl(){
    this.dossier_s.getAllDossiers().subscribe(
      data =>{
        this.dossiers = data;
        this.loadScripts();
      });
  }

  // ALL Dossier by Client with type and Year
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
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }
}
