import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../Services/dossier.service";
import {Dossier} from "../../Models/dossier";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dossier-export',
  templateUrl: './dossier-export.component.html',
  styleUrls: ['./dossier-export.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DossierExportComponent implements OnInit{

  doss_export : any;
  public comp = 3;
  public enatt = 1;
  public entrai = 2;

  constructor( private service : DossierService, private router : Router) {
  }


  ngOnInit(): void {


    this.getDossiersExport();

  }

    getDossiersExport(){
    this.service.getDossiersExport().subscribe(
      data =>{
        this.doss_export = data;
        this.doss_export = this.doss_export._embedded.dossiers;
        this.loadScripts();
        console.log(this.doss_export);
      });
  }

  //Delete Dossier
  DeleteDossier( p : Dossier){
    console.log(p);
    let conf = confirm("Are you sure ?");
    if (conf)
      this.service.DeleteDossier(p.id).subscribe(() => {
        console.log("Booking deleted");
        this.router.navigate(['export']);
        window.location.reload();
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