import './App.css';
import React from 'react'

// Your goal is to create a voting app
// In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
// Create a function that increases the state of the votes by one, when you click on a specific language button.

import Language from './components/Language';

function App() {
  const [languages, setLanguages] = React.useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  return (
    <div>
     {languages.map((item, ind) => {
      return <Language votes={item.votes} name={item.name} key={ind} setLanguages={setLanguages}/>
     })}
    </div>
  );
}

export default App;
