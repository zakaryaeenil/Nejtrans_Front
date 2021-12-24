import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rapportavg} from "../Models/rapportavg";
import {RapportYearAvg} from "../Models/rapport-year-avg";

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http : HttpClient) { }

  // Entreprise
    //Month
  getFoldersAvg() : Observable<Rapportavg>{
    return this.http.get<Rapportavg>("http://localhost:8080/api/rapport/all" );
  }
  getFoldersAvgpertype(type : string) : Observable<Rapportavg>{
    return this.http.get<Rapportavg>(`http://localhost:8080/api/rapport/${type}`);
  }
   //Year
  getFoldersYearAvg() : Observable<RapportYearAvg>{
    return this.http.get<RapportYearAvg>("http://localhost:8080/api/rapport/year/all" );
  }
  getFoldersAvgYearpertype(type : string) : Observable<RapportYearAvg>{
    return this.http.get<RapportYearAvg>(`http://localhost:8080/api/rapport/year/${type}`);
  }
}