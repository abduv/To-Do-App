import React, { createContext, useReducer, useContext } from 'react'
import { reducer } from './reducer';
import * as actions from './actions'

const url = 'https://to-do-app-ce14c-default-rtdb.europe-west1.firebasedatabase.app';

export const Store = createContext({
    todos: [],
    loading: false
})

export const StoreContext = ({ children }) => {
    const store = useContext(Store)
    const [state, dispatch] = useReducer(reducer, store)

    const showLoader = () => dispatch(actions.showLoaderAC())

    const fetchTodos = async () => {
        showLoader()
        const res = await fetch(`${url}/todos.json`)
        const data = await res.json()

        const payload = Object.keys(data || []).map(key => {
            return {
                ...data[key],
                id: key
            }
        })

        dispatch(actions.fetchTodosAC(payload))
    }

    const addTodo = async title => {
        const newTodo = {
            title,
            completed: false
        }

        try {
            const res = await fetch(`${ url }/todos.json`, {
                method: 'POST',
                body: JSON.stringify(newTodo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            const payload = {
                ...newTodo,
                id: data.name
            }
            dispatch(actions.addTodo(payload))
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTodo = async id => {
        await fetch(`${url}/todos/${id}.json`, {
            method: 'DELETE'
        })

        dispatch(actions.removeTodo(id))
    }

    const completeTodo = async id => {
        try {
            const todo = state.todos.find(todo => todo.id === id)
            const modified = { completed: !todo.completed }

            await fetch(`${url}/todos/${id}.json`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modified)
            })

            dispatch(actions.completeTodo(id))
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const updateTitle = async (id, newTitle) => {
        try {
            const modified = { title: newTitle }

            await fetch(`${url}/todos/${id}.json`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modified)
            })

            dispatch(actions.updateTitle(id, newTitle))
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <Store.Provider value={{
            state, dispatch, fetchTodos, addTodo, removeTodo, completeTodo, updateTitle
        }}>
            { children }
        </Store.Provider>
    )
}