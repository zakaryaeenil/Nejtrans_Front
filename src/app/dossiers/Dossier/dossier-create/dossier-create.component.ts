import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../../Services/dossier.service";
import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier} from "../../../Models/dossier";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-create',
  templateUrl: './dossier-create.component.html',
  styleUrls: ['./dossier-create.component.css']
})
export class DossierCreateComponent implements OnInit {

  public selectFile : File ;
  public type : string;
  @ViewChild('type') typeo;
  @ViewChild('operation') operation;
  @ViewChild('dossiertype') dossiertype;
  public dossier : Dossier = new Dossier();
  constructor(private service : DossierService , private http : HttpClient) { }

  ngOnInit(): void {

    this.loadScripts();
  }

 // CreateFolder(){
  //  this.service.ClientCreateFolder().subscribe( data =>{
   //   console.log(data);
  //  })
 // }


  selectedFile(event){
    this.selectFile = event.target.files[0];
    this.type = this.typeo.nativeElement.value.toString();
  }

  onFileSelected() {
    this.dossier.typeDossier = this.dossiertype.nativeElement.value.toString();
    this.dossier.operation = this.operation.nativeElement.value.toString();
this.service.ClientCreateFolder(this.dossier).subscribe(data =>{
      if (this.selectFile) {
      this.service.upload(this.selectFile,this.type , this.dossier.id).subscribe(data =>{
      console.log(data)
    })

  }
})
  }


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/plugins/dropify/dropify.min.js',
      'assets/assets/js/apps/invoice-add.js',
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
