import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  inputValue = 'Beurre';

  todos = [
    { id: Math.random(), title: 'Pain', completed: true },
    { id: Math.random(), title: 'Lait', completed: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
