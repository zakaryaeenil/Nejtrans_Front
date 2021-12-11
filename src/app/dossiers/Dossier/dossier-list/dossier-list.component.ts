import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Dossier} from "../../../Models/dossier";
import {DossierService} from "../../../Services/dossier.service";
import {AuthService} from "../../../Login/auth.service";

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
  constructor(private service : DossierService ,private router : Router ,private Auth :AuthService) {

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



   //Delete Dossier
  DeleteDossier( p : Dossier){
    console.log(p);
  let conf = confirm("Are you sure ?");
  if (conf)
    this.service.DeleteDossier(p.id).subscribe(() => {
      console.log("Booking deleted");
      this.router.navigate(['dossiers']);
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
