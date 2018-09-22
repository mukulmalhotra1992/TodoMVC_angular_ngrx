import { Component, OnInit } from '@angular/core';
import { Todo } from '../../redux/todo-model/todo.model';
import { AppState } from '../../redux/app.reducer';
import { Store } from '@ngrx/store';
import { getVisibleTodos } from '../../redux/selector/selector';
import * as TodoActions from './../../redux/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todo: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getVisibleTodos)
    .subscribe(todos => {
      this.todo = todos;
    });
  }

  deleteTodo(id): void {
    const deleteTodo = new TodoActions.DeleteTodoAction(id);
    this.store.dispatch(deleteTodo);
  }

  completeAllTodo(): void {
    this.store.dispatch(new TodoActions.CompletedAllTodoAction());
  }

  toggleTodo(id): void {
    const toggleTodo = new TodoActions.ToggleTodoAction(id);
    this.store.dispatch(toggleTodo);
  }
}
