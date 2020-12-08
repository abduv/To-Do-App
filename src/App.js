import React, { useContext, useReducer } from 'react'
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Completed } from './components/Completed';
import { Store } from './context/Store';
import { reducer } from './context/reducer';

function App() {
    const store = useContext(Store)
    const [state, dispatch] = useReducer(reducer, store)

    return (
        <Store.Provider value={ { state, dispatch } }>
            <div>
                <Header/>
                <div className="container">
                    <AddTodo/>
                    <TodoList/>
                    <Completed/>
                </div>
            </div>
        </Store.Provider>
    );
}

export default App;
