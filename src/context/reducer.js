import { ADD_TODO, REMOVE_TODO, UPDATE_TITLE } from './constants';

export function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(...[action.payload])
            }
        case UPDATE_TITLE:
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, title: action.payload.newTitle}
                    }
                    return todo
                })]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        default: return state
    }
}