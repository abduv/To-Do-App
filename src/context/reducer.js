import { ADD_TODO } from './constants';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(...[action.payload])
            }
        default: return state
    }
}