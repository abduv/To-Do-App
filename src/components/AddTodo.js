import React, { useContext, useState } from 'react';
import { Card } from './Card';
import { Store } from '../context/Store';

export const AddTodo = () => {
    const { addTodo } = useContext(Store)
    const [title, setTitle] = useState('')

    const handleAddTodo = e => {
        e.preventDefault()
        if (title) {
            addTodo(title)
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