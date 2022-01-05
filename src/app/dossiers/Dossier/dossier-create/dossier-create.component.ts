import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DossierService} from "../../../Services/dossier.service";
import {UserService} from "../../../Services/user.service";

import {HelperForm} from "../../../Models/helper-form";
import {AuthService} from "../../../Login/auth.service";
import {ToastrService} from "ngx-toastr";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-dossier-create',
  templateUrl: './dossier-create.component.html',
  styleUrls: ['./dossier-create.component.css']
})
export class DossierCreateComponent implements OnInit {

  public selectedFiles : File[] = [];
  public type : string = '';
  @ViewChild('operation') operation;
  @ViewChild('dossiertype') dossiertype;
  @ViewChild('username') username;
  public helperform = new HelperForm();
  public users : any;
  public i : number =1;
  constructor(private service : DossierService , private userservice : UserService,public Auth: AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.loadScripts();
    if (!this.Auth.isClient()){
      this.getClient();
    }
  }
  selectedName(events){
    this.type = events.target.value.toString();
  }
  selectedFile(event){

    const selectFile: File = new File([event.target.files[0]], this.type);
    this.selectedFiles.push(selectFile);
    event.target.value = "";
   console.log( this.selectedFiles);
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
  getClient(){
    this.userservice.getClients().subscribe(data =>{
      this.users = data;
      this.users = this.users._embedded.users;
    })
  }

  onFileSelected() {
    this.helperform.typeDossier=this.dossiertype.nativeElement.value.toString();
    this.helperform.operation=this.operation.nativeElement.value.toString();
    if (this.Auth.isClient()){
      this.helperform.username="";
    }
    else {
      this.helperform.username=this.username.nativeElement.value.toString();
    }


    if (this.selectedFile) {
      this.service.ClientCreateFolder(this.helperform,this.selectedFiles).subscribe(data =>{

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


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/plugins/dropify/dropify.min.js',
      //Load all your script files here'
    ];
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }
}
