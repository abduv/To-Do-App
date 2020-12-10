import React, { useContext, useEffect} from 'react';
import { Card } from './Card';
import { Store } from '../context/Store';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { state: { todos }, fetchTodos } = useContext(Store)
    const todoListTodo = todos.filter(todo => !todo.completed)

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <>
            <Card title="To-Do List">
                <ul className="todoList">
                    { todoListTodo.length === 0 ? (
                        <p className="noTodo">You don't have a to-do yet</p>
                    ) : todoListTodo.map(todo => {
                        if (!todo.completed) {
                            return <TodoItem
                                todo={todo}
                                key={todo.id}
                            />
                        }
                    })}
                </ul>
            </Card>
        </>
    )
}