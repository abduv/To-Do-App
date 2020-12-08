import React from 'react'
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
