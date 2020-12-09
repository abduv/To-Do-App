import React, { useState, useContext } from 'react';
import { Store } from '../context/Store';
import { Button } from './Button';
import * as actions from '../context/actions'

export const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(Store)
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const handleEditTodo = id => {
        if (editMode) {
            if (newTitle) {
                dispatch(actions.updateTitle(id, newTitle))
                setEditMode(false)
                return null
            }
            setEditMode(true)
        } else {
            setEditMode(true)
        }
    }

    const handleRemoveTodo = id => {
        dispatch(actions.removeTodo(id))
    }

    const handleCompleteTodo = id => {
        dispatch(actions.completeTodo(id))
    }

    return (
        <li className="todoList__item">
            <input onClick={ () => handleCompleteTodo(todo.id) } className="todoList__completed"
                   id="completed" type="checkbox"/>
            { editMode ? (
                <input
                    onChange={ e => setNewTitle(e.target.value) }
                    className="todoList__input"
                    defaultValue={ todo.title }
                    autoFocus={ true }
                />
            ) : (
                <label className="todoList__title" htmlFor="completed">{ todo.title }</label>
            ) }
            <Button
                onClick={ () => handleEditTodo(todo.id, todo.title) }
                className="todoList__button todoList__editButton"
            >
                { editMode ? 'Save' : 'Edit' }
            </Button>
            <Button
                onClick={ () => handleRemoveTodo(todo.id) }
                className="todoList__button todoList__removeButton">
                Remove
            </Button>
        </li>
    )
}