import { Action } from '@ngrx/store';

export const ADD_TODO    = '[TODO] add';
export const DELETE_TODO = '[TODO] delete';
export const TOGGLE_TODO = '[TODO] toggle';
export const COMPLETE_ALL_TODO = '[TODO] complete';
export const CLEAR_COMPLETED_TODO =  '[TODO] clear completed';


export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: number;

  constructor(public text: string) {
      this.id = Math.random() * 100;
   }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class CompletedAllTodoAction implements Action {
    readonly type = COMPLETE_ALL_TODO;
}

export class ClearCompletedTodoAction implements Action {
    readonly type = CLEAR_COMPLETED_TODO;
}

export type TodoActionType =
AddTodoAction |
DeleteTodoAction |
ToggleTodoAction |
CompletedAllTodoAction |
ClearCompletedTodoAction;
