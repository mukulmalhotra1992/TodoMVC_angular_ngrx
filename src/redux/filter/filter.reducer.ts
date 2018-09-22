import * as FilterActions from './filter.action';

export function FilterReducer(state: string = 'SHOW_ALL', action: FilterActions.SetFilterAction) {
    switch (action.type) {

        case FilterActions.SET_FILTER: {
            return action.filter;
        }

        default:
            return state;
    }
}
