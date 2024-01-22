import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './ErrorBoundaty';
import Color from './components/Color';

// EXERCISE 1
// In the App.js file create a class component named BuggyCounter.
//In another Javascript file, create the ErrorBoundary class component.

// EXERCISE 2
// Do the exercise xp 4 of yesterday using Class Components (components/Color)


function App() {
  return (
    <div style={{marginLeft:'200px'}}>
    <ErrorBoundary>
      <BuggyCounter/>
      <br/>
      <br/>
      <BuggyCounter/>
    </ErrorBoundary>
    <hr/>

    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
    <br/>
    <br/>

    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
    <hr/>

     <BuggyCounter/>
     <Color/>
    </div>
  );
}

export default App;
