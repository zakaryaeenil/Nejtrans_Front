import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";
import {Employeechart} from "../../Models/employeechart";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  anio: number = new Date().getFullYear();
  client : any;
  completed :any;
  doss_import : number;
  doss_export : number;
  import : any;
  export : any;

  // barcharts for Dossier per year
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [];
  public barChartColors: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
  ]



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

  constructor(private service : UserService ,private router:Router,private activatedRoute: ActivatedRoute)
  {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getInfoClient();
    this.getDossierperyearwithUsername(this.anio);
    this.getDossiersEmployeeImportCount();

  }
  getInfoClient(){
    this.service.getClientInfo(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.client=data;
    })
  }

  getDossierperyearwithUsername(year : number){

    this.service.getEmployeeFoldercountByYear(this.activatedRoute.snapshot.params['username'],2,year).subscribe(data=>{
      this.completed=data;
      var month = this.completed.map(function (elem){
        return elem.month;
      })
      var count = this.completed.map(function (elem){
        return elem.count;
      })
      this.barChartLabels = month;
      this.barChartData = [{data : count , label : 'Dossiers  Year '+year}];

    })
  }


  // ALL Dossier by Employee Import Count
  getDossiersEmployeeImportCount(){
    this.service.getEmployeeFoldercountPerType(this.activatedRoute.snapshot.params['username'],'Import').subscribe(data=>{
      this.doss_import=data;
      this.service.getEmployeeFoldercountPerType(this.activatedRoute.snapshot.params['username'],'Export').subscribe(data=>{
        this.doss_export=data;
        console.log(data);
        this.pieChartLabels =['Import', 'Export'];
        this.pieChartData =[this.doss_import,this.doss_export];
      })
    })
  }

  getDossiersEmployeeImportCountPeryear(year : number){
    this.service.getEmployeeFoldercountPerTypeWithYear(this.activatedRoute.snapshot.params['username'],'Import' , year).subscribe(data=>{
      this.import=data;
      this.service.getEmployeeFoldercountPerTypeWithYear(this.activatedRoute.snapshot.params['username'],'Export',year).subscribe(data=>{
        this.export=data;
        console.log(data);
        this.pieChartLabels =['Import', 'Export'];
        this.pieChartData =[this.import,this.export];
      })
    })
  }


}
