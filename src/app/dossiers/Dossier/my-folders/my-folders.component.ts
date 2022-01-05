import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Dossier} from "../../../Models/dossier";
import {DossierService} from "../../../Services/dossier.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";
import * as FileSaver from "file-saver";

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
  public err= 0;
  public details : any;
  public selectFile : File ;
  public selectedFiles : File[] = [];
  public type : string = '';
  public i : number =1;
  public Dossier_app : Dossier;
  constructor(private service : DossierService ,private router : Router ,public Auth :AuthService, private toastr : ToastrService) {

  }


  ngOnInit(): void {

    this.getDossiersALl();

  }

  getNavigate(){
    this.router.navigate(['/dossiers/create']);
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
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
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
    })
  }
  OnDownload(doc : any){
    this.service.DownloadDocument(doc.id).subscribe(blob => {
      FileSaver(blob, doc.name);
    })
  }
}
