import React from 'react';
import { Card } from './Card';

export const TodoList = () => {
    const todo = [
        {
            title: 'buy milk',
            completed: false,
            id: 1
        },
        {
            title: 'buy milk',
            completed: false,
            id: 2
        },
        {
            title: 'buy milk',
            completed: false,
            id: 3
        },
        {
            title: 'buy milk',
            completed: false,
            id: 4
        }
    ]

    return (
        <>
            <Card title="To-Do List">
                <ul className="todoList">
                    { todo.map(el => (
                        <li className="todoList__item">
                            <input className="todoList__completed" id="completed" type="checkbox"/>
                            <label className="todoList__title" htmlFor="completed">{ el.title }</label>
                            <button className="todoList__button todoList__editButton">
                                Edit
                            </button>
                            <button className="todoList__button todoList__removeButton">
                                Remove
                            </button>
                        </li>
                    )) }
                </ul>
            </Card>
        </>
    )
}