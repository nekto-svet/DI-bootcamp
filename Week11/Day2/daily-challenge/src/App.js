import './App.css';
import { Provider } from 'react-redux';
import store from './App/store';
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Todo/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
