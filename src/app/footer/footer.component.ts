import { Component, OnInit } from '@angular/core';
import { AppState } from '../../redux/app.reducer';
import { Store } from '@ngrx/store';
import { getVisibleTodos } from '../../redux/selector/selector';
import * as TodoAction from './../../redux/todo/todo.action';
import * as FilterAction from './../../redux/filter/filter.action';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public countTodos: number;
  public currentFilter: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getVisibleTodos)
    .subscribe(todos => {
      this.countTodos = todos.filter(t => !t.completed).length;
    });
    this.store.select('filter')
    .subscribe(filter => {
      this.currentFilter = filter;
    });
  }

  clearCompleted(): void {
    const clearCompleteAction = new TodoAction.ClearCompletedTodoAction;
    this.store.dispatch(clearCompleteAction);
  }

  setFilter(filter: string): void {
    switch (filter) {
      default:
      case 'showAll' : {
        this.store.dispatch(new FilterAction.SetFilterAction('SHOW_ALL'));
        break;
      }
      case 'active' : {
        this.store.dispatch(new FilterAction.SetFilterAction('SHOW_ACTIVE'));
        break;
      }
      case 'completed' : {
        this.store.dispatch(new FilterAction.SetFilterAction('SHOW_COMPLETED'));
        break;
      }
    }
  }

}
