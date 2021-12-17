import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Dossier} from "../../../Models/dossier";
import {DossierService} from "../../../Services/dossier.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-my-folders',
  templateUrl: './my-folders.component.html',
  styleUrls: ['./my-folders.component.css']
})
export class MyFoldersComponent implements OnInit {

  dossiers : Dossier[];
  public import = "Import";
  public export = "Export";
  public comp = 3;
  public enatt = 1;
  public entrai = 2;
  constructor(private service : DossierService ,private router : Router ,public Auth :AuthService, private toastr : ToastrService) {

  }


  ngOnInit(): void {

    this.getDossiersALl();

  }


  // Afficher tout Dossier
  getDossiersALl(){
    if (this.Auth.isClient()) {
      this.service.getLoggedInClientFolders('All').subscribe(
        data =>{
          this.dossiers = data;
          this.loadScripts();
        });

    }
    else if (this.Auth.isEmployee()){
      this.service.getLoggedInEmployeeFolders('All').subscribe(
        data =>{
          this.dossiers = data;
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

  CompletedFolder(folder : Dossier){
    this.service.CompletedFolder(folder).subscribe(data =>{

        this.toastr.success('Dossier Completed avec success', ' Dossier Terminer');
        setTimeout(() => {
          window.location.reload();
          // And any other code that should run only after 5s
        }, 2000);
      },
      error=> this.toastr.error('Error','Error'));

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

  Desabonner(dossier : Dossier) {
    this.service.Desabonner(dossier).subscribe(data =>{

        this.toastr.success('Dossier Completed avec success', ' Dossier Terminer');
        setTimeout(() => {
          window.location.reload();
          // And any other code that should run only after 5s
        }, 2000);
      },
      error=> this.toastr.error('Error','Error'));

  }
}
