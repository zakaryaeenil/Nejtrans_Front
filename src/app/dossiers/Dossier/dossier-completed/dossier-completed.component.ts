import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../../Services/dossier.service";
import {Dossier} from "../../../Models/dossier";
import {Router} from "@angular/router";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../../Models/user";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-completed',
  templateUrl: './dossier-completed.component.html',
  styleUrls: ['./dossier-completed.component.css']
})
export class DossierCompletedComponent implements OnInit {
  doss_completed : any;
  public import : 'import';
  public export : 'export';
  public details : number;
  constructor( private service : DossierService , private router: Router , private Auth:AuthService , private toastr : ToastrService) {
  }


  ngOnInit(): void {

    this.getDossiersCompleted();

  }

  getDossiersCompleted() {
    if (this.Auth.isAdmin()){
    this.service.getDossiersCompleted().subscribe(
      data => {
        this.doss_completed = data;
        this.doss_completed = this.doss_completed._embedded.dossiers;
        this.loadScripts();
      });
  }
    else if (this.Auth.isEmployee()){
  this.service.getLoggedInEmployeeFolders("Terminer").subscribe(
    data =>{
   this.doss_completed = data;
  this.loadScripts();
     });
   }
    else  if (this.Auth.isClient()) {
      this.service.getLoggedInClientFolders('Terminer').subscribe(
        data =>{
          this.doss_completed = data;
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

  detailsInfo(d : any){
    this.details = d.id;
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
