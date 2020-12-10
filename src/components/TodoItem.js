import React, { useState, useContext, useEffect } from 'react';
import { Store } from '../context/Store';
import { Button } from './Button';

export const TodoItem = ({ todo }) => {
    const { completeTodo, removeTodo, updateTitle } = useContext(Store)
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')

    useEffect(() => {
        setTitle(todo.title)
    }, [todo])

    const handleEditTodo = id => {
        if (editMode) {
            if (title) {
                updateTitle(id, title)
                setEditMode(false)
                return null
            }
            setEditMode(true)
        } else {
            setEditMode(true)
        }
    }

    const handleRemoveTodo = id => {
        removeTodo(id)
    }

    const handleCompleteTodo = id => {
        completeTodo(id)
    }

    return (
        <li className="todoList__item">
            <input onClick={ () => handleCompleteTodo(todo.id) } className="todoList__completed"
                   id="completed" type="checkbox"/>
            { editMode ? (
                <input
                    onChange={ e => setTitle(e.target.value) }
                    className="todoList__input"
                    value={ title }
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