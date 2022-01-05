import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Models/user";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  user:User =new User();
  Employee : User[];
  emlpyee_helper : any;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal;
  constructor(private service : UserService ,private router : Router , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getEmployee()
  }


//  Affichage Employee
getEmployee(){
    this.service.getEmployees().subscribe(
      data =>{
        this.emlpyee_helper = data;
        this.Employee = this.emlpyee_helper._embedded.users;
        this.loadScripts();
      });
}

  onSubmit(){
    this.saveUser();
    this.goToUserList();
  }

  saveUser(){
    this.service.createEmployee(this.user).subscribe(data =>{
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
        this.toastr.success('Employee a été supprimer avec success', 'Suppression Employee');
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
