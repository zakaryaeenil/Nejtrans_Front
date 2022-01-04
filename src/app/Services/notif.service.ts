import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../Models/notification";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  private HostUrl=environment.url;
  constructor( private http : HttpClient) { }
  //All Notifications
  getAllNotif() : Observable<Notification[]>{
    return this.http.get<Notification[]>(`${this.HostUrl}api/notifications/all`);
  }
  OnRead(id : number): Observable<Object>{
    return this.http.put(`${this.HostUrl}api/notifications/${id}/read`,id);
  }
}
