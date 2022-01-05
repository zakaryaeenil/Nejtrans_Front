import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../Models/todo";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private HostUrl=environment.url;
  constructor(private http : HttpClient) { }

  gettodoItem(type : string) : Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.HostUrl}api/todos/${type}`);
  }
  changeTypetodoItem(id : number,type : string) : Observable<string>{
    return this.http.put<string>(`${this.HostUrl}api/todos/${id}/${type}`,{responseType : 'text'});
  }
  //Delete Dossier
  DeleteTodoItem(id: number) : Observable<any>{
    return this.http.delete(`${this.HostUrl}api/todos/${id}`,{responseType: 'text'});
  }
  createTodoItem(todo: Todo): Observable<Object>{
    return this.http.post(`${this.HostUrl}api/todos/create`, todo);
  }
}
