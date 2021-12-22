import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }

  getEvents() : Observable<Event[]>{
    return this.http.get<Event[]>("http://localhost:8080/api/events/all");
  }
}
