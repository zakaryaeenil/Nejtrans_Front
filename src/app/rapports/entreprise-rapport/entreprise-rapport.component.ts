import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RapportService} from "../../Services/rapport.service";
import {Rapportavg} from "../../Models/rapportavg";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label, SingleDataSet} from "ng2-charts";
import {UserService} from "../../Services/user.service";
import {RapportYearAvg} from "../../Models/rapport-year-avg";

@Component({
  encapsulation : ViewEncapsulation.None,
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

  constructor(private service_rapport : RapportService,private service: UserService) { }

  ngOnInit(): void {
    this.getFoldersAvg();
    this.getImportAvg();
    this.getExportAvg();

    this.getFoldersYearAvg();
    this.getImportYearAvg();
    this.getExportYearAvg();

    this.getAllDossierperyear(this.anio);
    this.getImportExportwithYear(this.anio);
  }

  getFoldersAvg(){
    this.service_rapport.getFoldersAvg().subscribe(data =>{
      this.Totalhelperclass = data;
      this.Totalhelperclass.avg = (this.Totalhelperclass.result /this.Totalhelperclass.lastMounth)*100;
    })
  }
  getExportAvg(){
    this.service_rapport.getFoldersAvgpertype('Export').subscribe(data =>{
      this.Exporthelperclass = data;
      this.Exporthelperclass.avg = (this.Exporthelperclass.result /this.Exporthelperclass.lastMounth)*100;
    })
  }
  getImportAvg(){
    this.service_rapport.getFoldersAvgpertype('Import').subscribe(data =>{
      this.Importhelperclass = data;
      this.Importhelperclass.avg = (this.Importhelperclass.result /this.Importhelperclass.lastMounth)*100;
    })
  }


  getFoldersYearAvg(){
    this.service_rapport.getFoldersYearAvg().subscribe(data =>{
      this.TotalYear = data;
      console.log(this.TotalYear)
      this.TotalYear.avg = (this.TotalYear.result /this.TotalYear.lastYear)*100;
    })
  }
  getExportYearAvg(){
    this.service_rapport.getFoldersAvgYearpertype('Export').subscribe(data =>{
      this.ExportYear = data;
      this.ExportYear.avg = (this.ExportYear.result /this.ExportYear.lastYear)*100;
    })
  }
  getImportYearAvg(){
    this.service_rapport.getFoldersAvgYearpertype('Import').subscribe(data =>{
      this.ImportYear = data;
      this.ImportYear.avg = (this.ImportYear.result /this.ImportYear.lastYear)*100;
    })
  }


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