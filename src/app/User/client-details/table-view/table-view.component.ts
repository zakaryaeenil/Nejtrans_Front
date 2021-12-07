import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  @Input()
  id: number;
  doss : any;
  public import = "Import";
  public export = "Export";
  public comp = 3;
  public enatt = 1;
  public entrai = 2;
  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.getDossiersCLient();
  }

  // ALL Dossier by Client
  getDossiersCLient() {

    this.service.getClientsDossiers(this.id).subscribe(data=>{
      this.doss=data;
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