import React, { useContext, useReducer } from 'react'
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Completed } from './components/Completed';
import { Store, StoreContext } from './context/Store';
import { reducer } from './context/reducer';

function App() {
    return (
        <StoreContext>
            <div>
                <Header/>
                <div className="container">
                    <AddTodo/>
                    <TodoList/>
                    <Completed/>
                </div>
            </div>
        </StoreContext>
    );
}

export default App;
