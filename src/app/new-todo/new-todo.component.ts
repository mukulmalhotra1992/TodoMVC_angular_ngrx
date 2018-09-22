import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../redux/app.reducer';
import * as TodoActions from './../../redux/todo/todo.action';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  private newTodoText: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(): void {
    if (this.newTodoText.trim().length) {
      const addTodo = new TodoActions.AddTodoAction(this.newTodoText.trim());
      this.store.dispatch(addTodo);
      this.newTodoText = '';
    }
  }

}
