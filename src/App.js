import React from 'react'
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Completed } from './components/Completed';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <AddTodo />
                <TodoList />
                <Completed />
            </div>
        </div>
    );
}

export default App;
