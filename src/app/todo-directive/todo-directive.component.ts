import { TodoReactiveService } from './../services/todo-reactive.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Todo } from '../model';

@Component({
  selector: 'app-todo-directive',
  templateUrl: './todo-directive.component.html',
  styleUrls: ['./todo-directive.component.css'],
})
export class TodoDirectiveComponent implements OnInit {
  todoForm = new FormGroup({
    task: new FormControl('', { validators: [Validators.required] }),
  });

  todoList: Subject<Todo[]> = new Subject<Todo[]>();
  todoSub: Subscription = new Subscription();
  constructor(private todoSer: TodoReactiveService) {}

  ngOnInit(): void {
    this.todoList = this.todoSer.todoListener$;
    // this.todoSub = this.todoSer.todoUpdated$.subscribe(
    //   (todoUpdate: Todo[]): void => {
    //     this.todoList = todoUpdate;
    //   }
    // );
  }

  onEdit(index: number, value: Todo) {
    this.todoForm.get('task')?.setValue(value.task);
    this.todoSer.updateTodo(index);
  }

  onDelete(index: number): void {
    this.todoSer.delete(index);
  }

  onAdd(): void {
    if (this.todoForm.invalid) {
      return;
    }
    const todo: Todo = {
      task: this.todoForm.get('task')!.value,
    };
    this.todoSer.addTodo(todo);
    this.todoForm.reset();
  }

  ngOnDestroy() {
    this.todoSub.unsubscribe();
  }
}
