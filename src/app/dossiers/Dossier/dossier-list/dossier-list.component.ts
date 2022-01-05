import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Dossier} from "../../../Models/dossier";
import {DossierService} from "../../../Services/dossier.service";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";
import * as FileSaver from "file-saver";
import {HelperForm} from "../../../Models/helper-form";
import {UserService} from "../../../Services/user.service";
import {data} from "jquery";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css'],
})
export class DossierListComponent implements OnInit{
  public err= 0;
   dossiers : Dossier[];
   public comp = 3;
   public enatt = 1;
   public entrai = 2;
   public details : any;

  public selectFile : File ;
  public selectedFiles : File[] = [];
  public type : string = '';
  public i : number =1;
  public Dossier_app : Dossier;

  constructor(private service : DossierService ,private router : Router ,public Auth :AuthService, private toastr: ToastrService ) {

  }

  ngOnInit(): void {

    this.getDossiersALl();
  }

  getNavigate(){
    this.router.navigate(['/dossiers/create']);
  }
  selectedFile(event){
    this.selectFile = event.target.files[0];
    this.selectedFiles.push(this.selectFile);
    console.log(event.target.files[0])

  }
  addrow(){
    this.i++;
  }

  deleterow(){
    this.i--;
  }

  counter(i :number){
    return new Array(this.i);
  }
  onFileSelected() {
    if (this.selectedFile) {
      this.service.ClientUpdateFolder(this.Dossier_app.id,this.selectedFiles).subscribe(data =>{

          this.toastr.success('Dossier Created avec success', 'Creation dossier');
          setTimeout(() => {
            window.location.reload();
            // And any other code that should run only after 5s
          }, 2000);
        },
        error=>
          this.toastr.error('Failled To Create Folder','Create Folder'));
    }
  }

  getdossier(d :Dossier){
    this.service.getDossier(d.id).subscribe(data =>{
      this.Dossier_app = data;
    })
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

   OnDownload(doc : any){
    this.service.DownloadDocument(doc.id).subscribe(blob => {
      FileSaver(blob, doc.name);
    })
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
      'assets/plugins/dropify/dropify.min.js',
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

}
