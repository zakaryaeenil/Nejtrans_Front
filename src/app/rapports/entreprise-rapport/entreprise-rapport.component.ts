import {Component, OnInit} from '@angular/core';
import {RapportService} from "../../Services/rapport.service";
import {Rapportavg} from "../../Models/rapportavg";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Label, SingleDataSet} from "ng2-charts";
import {UserService} from "../../Services/user.service";
import {RapportYearAvg} from "../../Models/rapport-year-avg";
import {RapportLineHelper} from "../../Models/rapport-line-helper";


@Component({
  selector: 'app-entreprise-rapport',
  templateUrl: './entreprise-rapport.component.html',
  styleUrls: ['./entreprise-rapport.component.css']
})
export class EntrepriseRapportComponent implements OnInit {
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


// barcharts for Dossier per year
  barChartOptions_1: ChartOptions = {
    responsive: true,
  };
  barChartLabels_1: Label[] =  ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',"JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  barChartType_1: ChartType = 'bar';
  barChartLegend_1 = true;
  barChartPlugins_1 = [];
  barChartData_1: ChartDataSets[] = [];

  anio: number = new Date().getFullYear();
  import : any;
  export : any;
  doss : any;

  Totalhelperclass : Rapportavg = new Rapportavg();
  Importhelperclass : Rapportavg = new Rapportavg();
  Exporthelperclass : Rapportavg = new Rapportavg();

  TotalYear : RapportYearAvg = new RapportYearAvg();
  ImportYear : RapportYearAvg = new RapportYearAvg();
  ExportYear : RapportYearAvg = new RapportYearAvg();

  LineData : RapportLineHelper[];
  LineData_1 : RapportLineHelper[];
  LineData_2 : RapportLineHelper[];

//
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',"JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';
  //
  lineChartData_1: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels_1: Label[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',"JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

  lineChartOptions_1 = {
    responsive: true,
  };

  lineChartColors_1: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend_1 = true;
  lineChartPlugins_1 = [];
  lineChartType_1 : ChartType = 'line';


  constructor(private service_rapport : RapportService,private service: UserService ) { }

  ngOnInit(): void {
    this.getFoldersAvg();
    this.getImportAvg();
    this.getExportAvg();

    this.getFoldersYearAvg();
    this.getImportYearAvg();
    this.getExportYearAvg();

    this.getlineData(this.anio);
    this.getlineALLData(this.anio);

    this.getImportExportwithYear(this.anio);
    this.getlineDataImpo(this.anio);

  }

  getFoldersAvg(){
    this.service_rapport.getFoldersAvg().subscribe(data =>{
      this.Totalhelperclass = data;
      this.Totalhelperclass.avg = (this.Totalhelperclass.result )*100;
    })
  }
  getExportAvg(){
    this.service_rapport.getFoldersAvgpertype('Export').subscribe(data =>{
      this.Exporthelperclass = data;
      this.Exporthelperclass.avg = (this.Exporthelperclass.result )*100;
    })
  }
  getImportAvg(){
    this.service_rapport.getFoldersAvgpertype('Import').subscribe(data =>{
      this.Importhelperclass = data;
      this.Importhelperclass.avg = (this.Importhelperclass.result )*100;
    })
  }


  getFoldersYearAvg(){
    this.service_rapport.getFoldersYearAvg().subscribe(data =>{
      this.TotalYear = data;
      this.TotalYear.avg = (this.TotalYear.result )*100;
    })
  }
  getExportYearAvg(){
    this.service_rapport.getFoldersAvgYearpertype('Export').subscribe(data =>{
      this.ExportYear = data;
      this.ExportYear.avg = (this.ExportYear.result )*100;
    })
  }
  getImportYearAvg(){
    this.service_rapport.getFoldersAvgYearpertype('Import').subscribe(data =>{
      this.ImportYear = data;
      this.ImportYear.avg = (this.ImportYear.result )*100;
    })
  }


  getImportExportwithYear(year : number){
    this.service.getDashboardDossiersTypeAndYear('Export',year).subscribe(data=>{
      this.import=data;
      this.service.getDashboardDossiersTypeAndYear('Import',year).subscribe(res=>{
        this.export=res;
        this.pieChartLabels =['Import', 'Export'];
        this.pieChartData =[this.import,this.export];
      })
    })
  }

  getlineData(year : number){
      this.service_rapport.getlineData(year).subscribe(data =>{
      this.LineData = data;

        let import_a = this.LineData.map(function (elem){
          return elem.countImport;
        })
        let export_a = this.LineData.map(function (elem){
          return elem.countExport;
        })

        this.barChartData_1 = [{data : import_a , label : 'Import  Year '+year},{data : export_a , label : 'Export  Year '+year}];
      })
  }

  getlineDataImpo(year : number){
    this.service_rapport.getlineData(year).subscribe(data =>{
      this.LineData_2 = data;

      let import_a = this.LineData_2.map(function (elem){
        return elem.countImport;
      })
      let export_a = this.LineData_2.map(function (elem){
        return elem.countExport;
      })


      this.lineChartData_1 = [{data : import_a , label : 'Import  Year '+year},{data : export_a , label : 'Export  Year '+year}];
    })
  }
  getlineALLData(year : number){
    this.service_rapport.getlineData(year).subscribe(data =>{
      this.LineData_1 = data;
      let total = this.LineData_1.map(function (elem){
        return elem.countTotal;
      })

      this.lineChartData = [{data : total , label : 'Total  Year '+year}];
    })
  }


}
