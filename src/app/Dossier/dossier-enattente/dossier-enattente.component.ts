import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../Services/dossier.service";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-enattente',
  templateUrl: './dossier-enattente.component.html',
  styleUrls: ['./dossier-enattente.component.css']
})
export class DossierEnattenteComponent implements OnInit {
  doss_enAttente : any;
  public import : 'import';
  public export : 'export';

  constructor( private service : DossierService ) {
  }


  ngOnInit(): void {


    this.getDossiersEnAttente();

  }

  getDossiersEnAttente(){
    this.service.getDossiersEnAttent().subscribe(
      data =>{
        this.doss_enAttente = data;
        this.doss_enAttente = this.doss_enAttente._embedded.dossiers;
        this.loadScripts();
        console.log(this.doss_enAttente);
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