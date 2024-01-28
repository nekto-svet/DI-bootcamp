import './App.css';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Date from './components.js/Date';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          {/* <Date/> */}
          <Todo/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
