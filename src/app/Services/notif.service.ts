import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../Models/notification";

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor( private http : HttpClient) { }
  //All Notifications
  getAllNotif() : Observable<Notification[]>{
    return this.http.get<Notification[]>("http://localhost:8080/api/notifications/all");
  }
  OnRead(id : number): Observable<Object>{
    return this.http.put(`http://localhost:8080/api/notifications/${id}/read`,id);
  }
}
