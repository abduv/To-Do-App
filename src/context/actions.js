import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TITLE } from './constants';

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