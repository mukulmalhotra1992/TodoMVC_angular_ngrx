import { Todo } from './todo-model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { TodoReducer } from './todo/todo.reducer';
import { FilterReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: string;
}

export const rootReducer: ActionReducerMap<AppState> = {
    todos: TodoReducer,
    filter: FilterReducer
};
