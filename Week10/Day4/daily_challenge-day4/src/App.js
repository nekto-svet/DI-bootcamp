
import './App.css';
import {useState, createContext, useContext, useReducer, useRef} from 'react';
import TodoList from './components/ToDo';

function App() {

  return (
    <div className="App">
      <header className='App-header'>
          <TodoList />
      </header>
    </div>
  );
}

export default App;
