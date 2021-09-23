import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private httpClient: HttpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((todos) => todos.slice(0, 10)),
    );
  }
}
