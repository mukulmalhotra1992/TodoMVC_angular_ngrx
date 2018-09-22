import { AppState } from './../app.reducer';
import { createSelector } from '@ngrx/store';
import { Todo } from '../todo-model/todo.model';

/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per 
    requirements of your application.
*/

export const getState = (state: AppState) => state;

export const getFilter = (state: AppState) => state.filter;

export const getTodos = (state: AppState) => state.todos;

export const getVisibleTodos = createSelector(
    getTodos,
    getFilter,
    (todos: Todo[], filter: string) => {
    switch (filter) {
        default:
        case 'SHOW_ALL':
            return todos;

        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);

        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
});
