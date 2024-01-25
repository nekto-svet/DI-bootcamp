
import './App.css';
import {useState, createContext} from 'react';

import Input from './components/InputAndCounter';
import TodoList from './components/ToDo';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark')

console.log(theme);

  return (
    <div className="App">
      <header className={`App-header ${theme}`}>
        <button onClick={()=> setTheme(theme==='dark'?'light':'dark')}>Switch Themes</button>
        <br/>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Input/>
          <TodoList />
        </ThemeContext.Provider>

      </header>
    </div>
  );
}

export default App;
