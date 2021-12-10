import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Models/user";
import {Router} from "@angular/router";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  client:User =new User();
  Clients : any;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal;
  constructor(private service : UserService , private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }


  getClients(){
    this.service.getClients().subscribe(
      data =>{
        this.Clients = data;
        this.Clients = this.Clients._embedded.users;
        console.log(this.Clients);
        this.loadScripts();
      });
  }

  onSubmit(){
    this.saveUser();
    this.goToUserList();
  }

  saveUser(){
    console.log(this.client);
    this.service.createUser(this.client).subscribe(data =>{
        console.log(data);
        this.router.navigateByUrl('Admin/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['Admin/clients']);
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
    console.log(u);
    let conf = confirm("Are you sure ?");
    if (conf)
      this.service.DeleteClient(u.id).subscribe(() => {
        console.log("Booking deleted");
        this.router.navigate(['/Admin/clients']);
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
      'assets/plugins/highlight/highlight.pack.js',
      'assets/assets/js/scrollspyNav.js'
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
