import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../../Services/dossier.service";
import {Dossier} from "../../../Models/dossier";
import {Router} from "@angular/router";
import {AuthService} from "../../../Login/auth.service";
import * as FileSaver from "file-saver";
import {ToastrService} from "ngx-toastr";

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
  public err= 0;
  public details : any;

  public selectFile : File ;
  public selectedFiles : File[] = [];
  public type : string = '';
  public i : number =1;
  public Dossier_app : Dossier;

  constructor( private service : DossierService , private router : Router , private Auth : AuthService, private toastr: ToastrService) {
  }


  ngOnInit(): void {


    this.getDossierEnTraitement();

  }

  getNavigate(){
    this.router.navigate(['/dossiers/create']);
  }

  getDossierEnTraitement() {
    if (this.Auth.isAdmin()){
    this.service.getDossiersEntraitement().subscribe(
      data => {
        this.doss_enTraitement = data;
        this.doss_enTraitement = this.doss_enTraitement._embedded.dossiers;
        this.loadScripts();
      });
  }
    else if (this.Auth.isEmployee()){
      this.service.getLoggedInEmployeeFolders('Entraitement').subscribe(
        data =>{
          this.doss_enTraitement = data;
          this.loadScripts();
        });
    }
    else  if (this.Auth.isClient()) {
      this.service.getLoggedInClientFolders('Entraitement').subscribe(
        data =>{
          this.doss_enTraitement = data;
          this.loadScripts();
        });

    }
  }

  //Delete Dossier
  DeleteDossier( p : Dossier){
    let conf = confirm("Are you sure ?");
    if (conf)
      this.service.DeleteDossier(p.id).subscribe(() => {
        this.router.navigate(['entraitement']);
        window.location.reload();
      });
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
