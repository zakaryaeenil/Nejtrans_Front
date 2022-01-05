import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rapportavg} from "../Models/rapportavg";
import {RapportYearAvg} from "../Models/rapport-year-avg";
import {RapportLineHelper} from "../Models/rapport-line-helper";
import {Helper} from "../Models/rapportAgents/helper";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private HostUrl=environment.url;
  constructor(private http : HttpClient) { }


  getFoldersAvg() : Observable<Rapportavg>{
    return this.http.get<Rapportavg>(`${this.HostUrl}api/rapport/all`);
  }
  getFoldersAvgpertype(type : string) : Observable<Rapportavg>{
    return this.http.get<Rapportavg>(`${this.HostUrl}api/rapport/${type}`);
  }
   //Year
  getFoldersYearAvg() : Observable<RapportYearAvg>{
    return this.http.get<RapportYearAvg>(`${this.HostUrl}api/rapport/year/all`);
  }
  getFoldersAvgYearpertype(type : string) : Observable<RapportYearAvg>{
    return this.http.get<RapportYearAvg>(`${this.HostUrl}api/rapport/year/${type}`);
  }
  getlineData(year : number) : Observable<RapportLineHelper[]>{
    return this.http.get<RapportLineHelper[]>(`${this.HostUrl}api/rapport/getmonths/${year}`);
  }

  getFoldersAgentsData() : Observable<Helper[]>{
    return this.http.get<Helper[]>(`${this.HostUrl}api/rapport/getmonthsAgents`);
  }

  getFoldersClientData() : Observable<Helper[]>{
    return this.http.get<Helper[]>(`${this.HostUrl}api/rapport/getmonthsClients`);
  }
//
}
