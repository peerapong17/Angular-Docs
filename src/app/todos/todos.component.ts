import { Component, OnInit } from '@angular/core';
import { Todo } from '../type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  task: string = ''
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        task: 'do a homework',
        isCompleted: false,
      },
      {
        task: 'get a haircut',
        isCompleted: false,
      },
      {
        task: 'clean the house',
        isCompleted: false,
      },
    ];
  }

  onDelete(index: number): void {
    this.todos = this.todos.filter((todo, i) => {
      return i !== index;
    });
  }

  onAdd(): void {
    this.todos.push({
      task: this.task,
      isCompleted: false
    })

    this.task = ''
  }
}
