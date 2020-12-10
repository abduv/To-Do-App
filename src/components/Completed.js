import React, { useContext } from 'react';
import { Card } from './Card';
import { Store } from '../context/Store';
import { Loading } from './Loading';

export const Completed = () => {
    const { state: {todos, loading} } = useContext(Store)
    const completedTodo = todos.filter(todo => todo.completed)

    return (
        <>
            <Card title="Completed">
                { loading ? (
                    <Loading />
                ) : (
                    <ul className="completed__list">
                        { completedTodo.length === 0 ? (
                            <p className="noTodo">You don't have a completed to-do yet</p>
                        ) : (
                            completedTodo.map(todo => (
                                <CompletedItem todo={todo} key={todo.id} />
                            ))
                        ) }
                    </ul>
                )}
            </Card>
        </>
    )
}

const CompletedItem = ({todo}) => {
    const { removeTodo } = useContext(Store)

    return (
        <li className="completed__item">
            <p className="completed__title">{ todo.title }</p>
            <button
                onClick={() => removeTodo(todo.id)}
                className="completed__button">Remove</button>
        </li>
    )
}