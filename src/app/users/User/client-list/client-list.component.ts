import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Models/user";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  user:User =new User();
  Clients : User[];
  client_helper : any;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal;
  constructor(private service : UserService , private router: Router , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getClients();
  }


  getClients(){
    this.service.getClients().subscribe(
      data =>{
        this.client_helper = data;
        this.Clients = this.client_helper._embedded.users;
        this.loadScripts();
      });
  }

  onSubmit(){
    this.saveUser();
    this.goToUserList();
  }

  saveUser(){
    this.service.createUser(this.user).subscribe(data =>{
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/employees']);
        });
      },
      error=> console.log(error));

  }

  goToUserList(){
    this.closeAddExpenseModal.nativeElement.click();
  }
//call this wherever you want to close modal

  //Delete Dossier
  DeleteClient( u : User){
    let conf = confirm("Are you sure ?");
    if (conf)
      this.service.DeleteClient(u.id).subscribe(() => {
        this.toastr.success('Client a été supprimer avec success', 'Suppression Client');
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
      'assets/plugins/highlight/highlight.pack.js',
      'assets/assets/js/scrollspyNav.js'
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
