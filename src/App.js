import React from 'react'
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <AddTodo />
            </div>
        </div>
    );
}

export default App;
