import store from './App/store';
import {Provider} from 'react-redux'
import './App.css';
import Users from './features/users/Users';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <Users/>
      </header>
    </div>
    </Provider>
  );
}


export default App;
