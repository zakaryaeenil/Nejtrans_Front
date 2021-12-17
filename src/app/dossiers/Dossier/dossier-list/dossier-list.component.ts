import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Dossier} from "../../../Models/dossier";
import {DossierService} from "../../../Services/dossier.service";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css'],
})
export class DossierListComponent implements OnInit{

   dossiers : Dossier[];
   public import = "Import";
   public export = "Export";
   public comp = 3;
   public enatt = 1;
   public entrai = 2;
   public details : number;
  constructor(private service : DossierService ,private router : Router ,public Auth :AuthService, private toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.getDossiersALl();
  }


  // Afficher tout Dossier
   getDossiersALl(){
    if(this.Auth.isAdmin()){
      this.service.getAllDossiers().subscribe(
        data =>{
          this.dossiers = data;
          this.loadScripts();
        });
    }
    else if(this.Auth.isEmployee()){
      this.service.getFreeFolders().subscribe(
        data =>{
          this.dossiers = data;
          this.loadScripts();
        });

    }

   }


   ReservedFolder(folder : Dossier){
     this.service.ReservedFolder(folder).subscribe(data =>{

        this.toastr.success('Dossier Reservé avec success', 'Reservation dossier');
         setTimeout(() => {
           window.location.reload();
           // And any other code that should run only after 5s
         }, 2000);
       },
       error=> this.toastr.error('Error','Error'));

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
    this.details = d.id;
  }

}
