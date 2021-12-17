import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../Models/todo";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  gettodoItem(type : string) : Observable<Todo[]>{
    return this.http.get<Todo[]>(`http://localhost:8080/api/todos/${type}`);
  }
  changeTypetodoItem(id : number,type : string) : Observable<string>{
    return this.http.put<string>(`http://localhost:8080/api/todos/${id}/${type}`,{responseType : 'text'});
  }
  //Delete Dossier
  DeleteTodoItem(id: number) : Observable<any>{
    return this.http.delete(`http://localhost:8080/api/todos/${id}`,{responseType: 'text'});
  }
  createTodoItem(todo: Todo): Observable<Object>{
    return this.http.post(`http://localhost:8080/api/todos/create`, todo);
  }
}
