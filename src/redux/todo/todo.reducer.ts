import { Todo } from './../todo-model/todo.model';
import * as TodoActions from './todo.action';

const initialState: Todo[] = [];

export function TodoReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
    switch (action.type) {
        // your action code here
        case TodoActions.ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        }

        case TodoActions.DELETE_TODO: {
            return state.filter(todo => action.id !== todo.id);
        }

        case TodoActions.TOGGLE_TODO: {
            return state.map(todo => {
                if (action.id === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            });
        }

        case TodoActions.COMPLETE_ALL_TODO: {
            const areAllCompleted = state.every(todo => todo.completed);
            return state.map(todo => {
                return {
                    ...todo,
                    completed: !areAllCompleted
                };
            });
        }

        case TodoActions.CLEAR_COMPLETED_TODO: {
            return state.filter(todo => !todo.completed);
        }

        default: {
            return state;
        }
    }
}
