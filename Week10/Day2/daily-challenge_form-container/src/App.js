import './App.css';
import React from 'react'

function App() {

  const [inputs, setInputs] = React.useState('');

  const handleInputs = (e) => {
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs ({...inputs,  [name]:value})
  }

  return (
    <div className="App">
      <header className="App-header">
        <form> 

          First Name: <input name='fName' type="text" onChange={(e) => handleInputs(e)}/> <br/>
          Last Name: <input name='lName' type="text" onChange={(e) => handleInputs(e)}/><br/>
          Age: <input name='age' type="text" onChange={(e) => handleInputs(e)}/><br/>
          <br/>
          <input type = 'radio' name='gender' value='male' onChange={(e) => handleInputs(e)}/>Male
          <br/>
          <input type = 'radio' name='gender' value='female' onChange={(e) => handleInputs(e)}/>Female
          <br/>
          <br/>
          <select name='destination' onChange={(e) => handleInputs(e)}>
            <option value=''>Please Choose a destination</option>
            <option value='Tel Aviv'>Tel Aviv</option>
            <option value='Moscow'>Moscow</option>
            <option value='Nowhere'>Nowhere</option>
          </select>
          <br/>
          <br/>
          Dietary restriction 
          <br/>
          <input name='nuts' type = 'checkbox'  onChange={(e) => handleInputs(e)}/> Nuts Free
          <br/>
          <input name='lactose' type = 'checkbox' onChange={(e) => handleInputs(e)}/> Lactose Free
          <br/>
          <input name='vegan' type = 'checkbox' onChange={(e) => handleInputs(e)}/> Vegan
          <br/>
          <br/>
          <input type="submit" value="Send"/>
        </form>
        <br/>
        <h2>Entered Information</h2>
        <div>Your name: {inputs.fName}</div>
        <div>Your last name: {inputs.lName}</div>
        <div>Your age: {inputs.age}</div>
        <div>Your gender: {inputs.gender}</div>
        <div>Your destination: {inputs.destination}</div>
        <div>Your diet:</div>
        <div>**Nuts free: {inputs.nuts? 'Yes':'No'}</div>
        <div>**Lactose free: {inputs.lactose? 'Yes':'No'}</div>
        <div>**Vegan meal: {inputs.vegan? 'Yes':'No'}</div>
      </header>
    </div>
  );
}


export default App;
