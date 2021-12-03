import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  Employee : any;

  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.getEmployee()
  }


//  Affichage Employee
getEmployee(){
    this.service.getEmployees().subscribe(
      data =>{
        this.Employee = data;
        this.Employee = this.Employee._embedded.users;
        console.log(this.Employee);
        this.loadScripts();
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
