import './App.css';
import Todo from './components.js/Todo';

import { Provider } from 'react-redux';
import store from './redux/store';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Todo/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
