import './App.css';
import CarInfo from './components/Car'
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
// Exercise I
// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
// In your React app create a new folder in the src path, name it Components. It should contain a Functional Component named Car.js.

// Exercise 2 : Events
// Create a new Functional component named Events.

// Exercise 3 : Phone And Components
// Create a new Functional Component named Phone.

// Exercise 4 : UseEffect Hook
// Create a new Functional Component named Color.

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div>
      Exercise 1
      <CarInfo carModel={carinfo.model}/>  

      Exercise 2
      <Events/>
      <br></br>

      Exercise 3
      <Phone/>

      Exercise 4
      <Color/>
    </div>
  );
}






export default App;
