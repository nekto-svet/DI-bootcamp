import TaskList from './features/tasks/TaskList';
import CategorySelector from './features/tasks/CategorySelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CategorySelector/>
        <br/>
        <TaskList/>
      </header>
    </div>
  );
}

export default App;
