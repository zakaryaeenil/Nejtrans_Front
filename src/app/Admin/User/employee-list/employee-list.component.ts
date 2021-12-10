import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Models/user";
import {Router} from "@angular/router";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  user:User =new User();
  Employee : any;
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal;
  constructor(private service : UserService ,private router : Router) { }

  ngOnInit(): void {
    this.getEmployee()
  }


//  Affichage Employee
getEmployee(){
    this.service.getEmployees().subscribe(
      data =>{
        this.Employee = data;
        this.Employee = this.Employee._embedded.users;
        this.loadScripts();
      });
}

  onSubmit(){
    console.log(this.user);
   // this.saveUser();
 //   this.goToUserList();
  }

  saveUser(){
    this.service.createEmployee(this.user).subscribe(data =>{
        console.log(data);
        this.router.navigateByUrl('Admin/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['Admin/employees']);
        });
      },
      error=> console.log(error));

  }

  goToUserList(){
    this.closeAddExpenseModal.nativeElement.click();
  }
//call this wherever you want to close modal


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
