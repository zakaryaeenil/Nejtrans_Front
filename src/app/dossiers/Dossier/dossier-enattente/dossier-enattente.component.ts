import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../../Services/dossier.service";
import {Dossier} from "../../../Models/dossier";
import {Router} from "@angular/router";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";
import * as FileSaver from "file-saver";


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
  public err= 0;
  public details : any;

  constructor( private service : DossierService ,private router :  Router , private Auth : AuthService , private toastr:ToastrService) {
  }


  ngOnInit(): void {


    this.getDossiersEnAttente();

  }

  getDossiersEnAttente(){
    if (this.Auth.isAdmin()) {
      this.service.getDossiersEnAttent().subscribe(
        data => {
          this.doss_enAttente = data;
          this.doss_enAttente = this.doss_enAttente._embedded.dossiers;
          this.loadScripts();
        });
    }
    else if (this.Auth.isClient()){
      this.service.getLoggedInClientFolders('Enattente').subscribe(
        data =>{
          this.doss_enAttente = data;
          this.loadScripts();
        });

    }
  }

  //Delete Dossier
  DeleteDossier( p : Dossier){
    let conf = confirm("Are you sure ?");
    if (conf)
      this.service.DeleteDossier(p.id).subscribe(() => {
        this.toastr.success('Dossier a été supprimer avec success', 'Suppression dossier');
        setTimeout(() => {
          window.location.reload();
          // And any other code that should run only after 5s
        }, 2000);
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
  detailsInfo(d : any){
    this.service.getDocuments(d.id).subscribe(data =>{
      this.details=data;
      this.details = this.details._embedded.documents;
      if (this.details ? this.details.length : '0'){
        this.err = 1
      }
      else {
        this.err = 0;
      }
      console.log(this.err);
    })
  }
  OnDownload(doc : any){
    this.service.DownloadDocument(doc.id).subscribe(blob => {
      FileSaver(blob, doc.name);
    })
  }

}
