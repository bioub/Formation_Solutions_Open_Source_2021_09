import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  inputValue = 'Beurre';

  todos: Todo[] = [
    { id: Math.random(), title: 'Pain', completed: true },
    { id: Math.random(), title: 'Lait', completed: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.todos.push({
      id: Math.random(),
      title: this.inputValue,
      completed: false,
    });
    this.inputValue = '';
  }

  deleteTodo(t: Todo) {
    const i = this.todos.indexOf(t);
    this.todos.splice(i, 1);
  }
}
