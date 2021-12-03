import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // javascript scripts affichage
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/libs/jquery-3.1.1.min.js',
      'assets/bootstrap/js/popper.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
      'assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
      'assets/assets/js/app.js',
      'assets/app_init.js',
      'assets/assets/js/custom.js',
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
