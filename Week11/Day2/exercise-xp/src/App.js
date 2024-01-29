import Todos from './features/todos/Todo';
import './App.css';
import { Provider } from 'react-redux';
import store from './App/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Todos/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
