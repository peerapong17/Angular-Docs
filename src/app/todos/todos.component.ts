import { TodoService } from './../services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../model';
import { NgForm } from '@angular/forms';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  task: string = '';
  todoList: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  // todoList: Todo[] = [];
  todoSub: Subscription = new Subscription();
  constructor(private todoSer: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todoSer.todoUpdated$;
    // this.todoSub = this.todoSer.todoUpdated$.subscribe(
    //   (todoUpdate: Todo[]): void => {
    //     this.todoList = todoUpdate;
    //   }
    // );
  }

  onEdit(value: string, index: number) {
    this.task = value;
    this.todoSer.editTodo(index);
  }

  onDelete(index: number): void {
    this.todoSer.deleteTodo(index);
  }

  onAdd(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const todo: Todo = {
      task: form.value.task,
    };

    this.todoSer.addTodo(todo);

    form.resetForm();
  }

  ngOnDestroy() {
    this.todoSub.unsubscribe();
  }
}
