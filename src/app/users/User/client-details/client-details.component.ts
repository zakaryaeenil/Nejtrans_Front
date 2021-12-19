import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../Services/user.service";
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color} from 'ng2-charts';
import {User} from "../../../Models/user";
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  anio: number = new Date().getFullYear();
  client : User;
  folders_year : any;
  doss_details : any;
  doss_details_import : any;
  doss_details_export : any;
  comp = 3;
  enatt = 1;
  entrai = 2;
  a : number =0;
  t : number =0;
  c : number =0;
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




  //Charts Tasks //
  public pieChartOptions1: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels1: Label[] = [];
  public pieChartData1: SingleDataSet = [];
  public pieChartType1: ChartType = 'pie';
  public pieChartLegend1 = true;
  public pieChartPlugins1 = [];
  public pieChartColors1: Array < any > = [{
    backgroundColor: ['#FF4343','#1FA0F3', '#56E073']
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


  constructor(private service : UserService ,private router:Router,private activatedRoute: ActivatedRoute) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }




  ngOnInit(): void {
    this.getInfoClient();
    this.getDossiersCLientImport();
    this.getDossiersCLientExport();
    this.getDossiersCLient();
    this.getDossierperyearwithId(this.anio);

  }

  // ALL Dossier by Client
  getDossiersCLient() {
    let a = this.a;
    let t = this.t;
    let c = this.c;
    this.service.getClientsDossiers(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.doss_details=data;
      this.doss_details.forEach(function (value) {
        switch (value.available){
          case 1 : {a = a+1; break;}
          case 2 : {t = t+1; break;}
          case 3 : {c = c+1; break;}
        }
      });
     this.pieChartLabels1 =['En Attente', 'En Traitement' , 'Terminer'];
      this.pieChartData1 =[a,t,c];
    });



  }

  getDossiersCLientPerYear(year : number) {
    let a = this.a;
    let t = this.t;
    let c = this.c;
    this.service.getClientsDossiersPerYear(this.activatedRoute.snapshot.params['id'], year).subscribe(data=>{
      this.doss_details=data;
      this.doss_details.forEach(function (value) {
        switch (value.available){
          case 1 : {a = a+1; break;}
          case 2 : {t = t+1; break;}
          case 3 : {c = c+1; break;}
        }
      });
      this.pieChartLabels1 =['En Attente', 'En Traitement' , 'Terminer'];
      this.pieChartData1 =[a,t,c];

    });



  }

  // ALL Dossier by Client Import
  getDossiersCLientImport(){
    this.service.getClientsDossiersType(this.activatedRoute.snapshot.params['id'],'Import').subscribe(data=>{
      this.doss_details_import=data;
    })
  }

  // ALL Dossier by Client Export
  getDossiersCLientExport(){
    this.service.getClientsDossiersType(this.activatedRoute.snapshot.params['id'],'Export').subscribe(data=>{
      this.doss_details_export=data;
      this.pieChartLabels =['Import', 'Export'];
      this.pieChartData =[this.doss_details_import.length,this.doss_details_export.length];

    })

  }

  getInfoClient(){
    this.service.getClientInfo(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.client=data;
    })
  }

  getDossierperyearwithId(year : number){

    this.service.getClientFolderCount(this.activatedRoute.snapshot.params['id'],year).subscribe(data=>{
      this.folders_year=data;
      var month = this.folders_year.map(function (elem){
        return elem.month;
      })
      var count = this.folders_year.map(function (elem){
        return elem.count;
      })
      this.barChartLabels = month;
     this.barChartData = [{data : count , label : 'Dossiers  Year '+year}];
    })

  }


  // ALL Dossier by Client Import Per Year and type
  getDossiersCLientPerYearAndType(year : number){
    this.service.getClientsDossiersTypePerYear(this.activatedRoute.snapshot.params['id'],'Import' , year).subscribe(data=>{
      this.import=data;
      this.service.getClientsDossiersTypePerYear(this.activatedRoute.snapshot.params['id'],'Export' , year).subscribe(data=>{
        this.export=data;
        this.pieChartLabels =['Import', 'Export'];
        this.pieChartData =[this.import.length,this.export.length];
      })
    })

  }


}

