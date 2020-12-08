import React, { useContext, useState } from 'react';
import { Card } from './Card';
import { Store } from '../context/Store';
import { ADD_TODO } from '../context/constants';

export const AddTodo = () => {
    const { state, dispatch } = useContext(Store)
    const [title, setTitle] = useState('')

    const handleAddTodo = e => {
        e.preventDefault()
        if (title) {
            const newTodo = {
                title,
                id: state.todos.length + 1,
                completed: false
            }
            dispatch({ type: ADD_TODO, payload: newTodo })
            setTitle('')
        }
    }

    return (
        <>
            <Card title="Add Todo">
                <form className="addTodo__form">
                    <div className="addTodo__input">
                        <input
                            type="text"
                            onChange={ e => setTitle(e.target.value) }
                            value={title}
                            required
                        />
                        <span className="bar"/>
                        <label>What do you want to do?</label>
                    </div>
                    <div className="addTodo__button">
                        <button type="submit" onClick={ handleAddTodo }>+</button>
                    </div>
                </form>
            </Card>
        </>
    )
}