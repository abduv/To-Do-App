import { ADD_TODO, COMPLETE_TODO, FETCH_TODOS, REMOVE_TODO, SHOW_LOADER, UPDATE_TITLE } from './constants';

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
        case COMPLETE_TODO:
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                })]
            }
        case FETCH_TODOS:
            return {
                ...state,
                todos: [...action.payload],
                loading: false
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}