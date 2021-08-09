import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Todo } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todoUpdated$ = new Subject<Todo[]>();
  todoList: Todo[] = [
    {
      task: 'do a homework',
    },
    {
      task: 'get a haircut',
    },
    {
      task: 'clean the house',
    },
  ];

  todoUpdated$ = new BehaviorSubject<Todo[]>(this.todoList);

  constructor() {}

  // get getTodoUpdatedListener(): Observable<Todo[]> {
  //   return this.todoUpdated$.asObservable();
  // }

  get getTodo(): Todo[] {
    return [...this.todoList];
  }

  editTodo(index: number) {
    this.todoList = this.todoList.filter((_, i) => {
      return i !== index;
    });
    this.todoUpdated$.next([...this.todoList]);
  }

  addTodo(data: Todo): void {
    this.todoList.push(data);
    this.todoUpdated$.next([...this.todoList]);
  }

  deleteTodo(index: number): void {
    this.todoList = this.todoList.filter((_, i) => {
      return i !== index;
    });
    this.todoUpdated$.next([...this.todoList]);
  }
}
