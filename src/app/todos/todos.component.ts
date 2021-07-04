import { Component, OnInit } from '@angular/core';
import { Todo } from '../type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
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

  onAdd(task:string): void {
    this.todos.push({
      task: task,
      isCompleted: false
    })
  }
}
