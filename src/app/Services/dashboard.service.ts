import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private HostUrl=environment.url;
  constructor(private http : HttpClient ) { }

  getEvents() : Observable<Event[]>{
    return this.http.get<Event[]>(`${this.HostUrl}api/events/all`);
  }
}
