import { ADD_TODO, COMPLETE_TODO, FETCH_TODOS, REMOVE_TODO, SHOW_LOADER, UPDATE_TITLE } from './constants';

export const updateTitle = (id, newTitle) => {
    return {
        type: UPDATE_TITLE,
        payload: { id, newTitle }
    }
}

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const fetchTodosAC = todos => {
    return {
        type: FETCH_TODOS,
        payload: todos
    }
}

export const showLoaderAC = () => {
    return {
        type: SHOW_LOADER
    }
}