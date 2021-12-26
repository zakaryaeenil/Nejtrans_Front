import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RapportService} from "../../Services/rapport.service";
import {Helper} from "../../Models/rapportAgents/helper";
import {Subhelper} from "../../Models/rapportAgents/subhelper";
import {UserService} from "../../Services/user.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-agents-rapport',
  templateUrl: './agents-rapport.component.html',
  styleUrls: ['./agents-rapport.component.css']
})
export class AgentsRapportComponent implements OnInit {

  helper : Helper[];
  sub : Subhelper[]
  clients : any;
  constructor(private service : RapportService  , private serv : UserService) {
  }

  ngOnInit(): void {
    this.getAgentsData();

  }

  getAgentsData(){
    this.getClients();
    this.service.getFoldersAgentsData().subscribe(data =>{
      this.helper = data;
      this.loadScripts();
    })
  }

  getClients(){
    this.serv.getEmployees().subscribe(
      data =>{
        this.clients = data;
        this.clients = this.clients._embedded.users;
        console.log(this.clients);

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
