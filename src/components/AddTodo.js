import React from 'react';
import { Card } from './Card';

export const AddTodo = () => {
    return (
        <>
            <Card title="Add Todo">
                <form className="addTodo__form">
                    <div className="addTodo__input">
                        <input type="text" required />
                        <span className="bar"></span>
                        <label>What do you want to do?</label>
                    </div>
                    <div className="addTodo__button">
                        <button>+</button>
                    </div>
                </form>
            </Card>
        </>
    )
}