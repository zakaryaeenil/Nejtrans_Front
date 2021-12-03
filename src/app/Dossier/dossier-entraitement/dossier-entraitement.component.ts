import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../Services/dossier.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-entraitement',
  templateUrl: './dossier-entraitement.component.html',
  styleUrls: ['./dossier-entraitement.component.css']
})
export class DossierEntraitementComponent implements OnInit {
  doss_enTraitement : any;
  public import : 'import';
  public export : 'export';

  constructor( private service : DossierService ) {
  }


  ngOnInit(): void {


    this.getDossierEnTraitement();

  }

  getDossierEnTraitement(){
    this.service.getDossiersEntraitement().subscribe(
      data =>{
        this.doss_enTraitement = data;
        this.doss_enTraitement = this.doss_enTraitement._embedded.dossiers;
        this.loadScripts();
        console.log(this.doss_enTraitement);
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
