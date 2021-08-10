import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TodoReactiveService {
  todoListener$: Subject<Todo[]> = new Subject<Todo[]>();
  todoList: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo): void {
    this.todoList.push(todo);
    this.todoListener$.next([...this.todoList]);
    console.log(this.todoList)
  }

  updateTodo(index: number) {
    this.todoList = this.todoList.filter((_, i) => i !== index);
    this.todoListener$.next([...this.todoList]);
  }

  delete(index: number): void {
    this.todoList.splice(index, 1);
    this.todoListener$.next([...this.todoList]);
  }
}
