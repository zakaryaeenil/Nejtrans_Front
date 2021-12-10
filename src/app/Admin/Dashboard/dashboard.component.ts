import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label, SingleDataSet} from "ng2-charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Employee : any;
  Clients : any;
  EmpTotal : number;
  ClientTotal : number;
  ImportTotal : number;
  ExportTotal : number;
  FolTotal : number;
  doss : any;
  doss_import: any;
  doss_export : any;
  anio: number = new Date().getFullYear();
  import : any;
  export : any;

  //Charts Import Export //
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array < any > = [{
    backgroundColor: [ '#7CBFFD','#6BA45D'],
  }];


// barcharts for Dossier per year
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [];


  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getImportExportwithYear(this.anio);
    this.getTopClients();
    this.getTopEmployees();
    this.getDashStatsClientsTotal();
    this.getDashStatsImportTotal();
    this.getDashStatsExportTotal();
    this.getDashStatsFolderTotal();
    this.getDashStatsEmpTotal();
    this.getAllDossierperyear(this.anio);

  }
  getTopClients(){
    this.service.getTopClients().subscribe(data =>{
      this.Clients = data;
      this.Clients =this.Clients._embedded.users;
      console.log(this.Clients);
    })
  }

  getTopEmployees(){
    this.service.getTopEmployees().subscribe(data =>{
      this.Employee =data;
      this.Employee = this.Employee._embedded.users;
      console.log(this.Employee._embedded.users);
    }
    )
  }

  getDashStatsFolderTotal(){
    this.service.getDashboardcountStats("FolTotal").subscribe(data =>{
      this.FolTotal = data;
    })
  }
  getDashStatsImportTotal(){
    this.service.getDashboardcountStats("ImportTotal").subscribe(data =>{
      this.ImportTotal = data;
    })
  }
  getDashStatsExportTotal(){
    this.service.getDashboardcountStats("ExportTotal").subscribe(data =>{
      this.ExportTotal = data;
    })
  }
  getDashStatsClientsTotal(){
    this.service.getDashboardcountStats("ClientTotal").subscribe(data =>{
      this.ClientTotal = data;
    })
  }
  getDashStatsEmpTotal(){
    this.service.getDashboardcountStats("EmpTotal").subscribe(data =>{
      this.EmpTotal = data;
    })
  }

  getAllDossierperyear(year : number){

    this.service.getAllFolderbyYear(year).subscribe(data=>{
      this.doss=data;
      var month = this.doss.map(function (elem){
        return elem.month;
      })
      var count = this.doss.map(function (elem){
        return elem.count;
      })
      this.barChartLabels = month;
      this.barChartData = [{data : count , label : 'Dossiers  Year '+year}];
    })

  }
 // ALL Dossier by Client with type and Year
  getImportExportwithYear(year : number){
    this.service.getDashboardDossiersTypeAndYear('Export',year).subscribe(data=>{
     this.import=data;
      this.service.getDashboardDossiersTypeAndYear('Import',year).subscribe(data=>{
        this.export=data;
        this.pieChartLabels =['Import', 'Export'];
        this.pieChartData =[this.import,this.export];
      })
   })
  }


}
