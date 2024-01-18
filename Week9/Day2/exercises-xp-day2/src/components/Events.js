// Exercise 2 : Events
// Part I:
// Create a new Functional component named Events.
// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// In the return, create a button that when clicked on, calls the clickMe function. Use the onClick event handler.


// Part II:
// In the Events Functional component, in the return, create an input 
// tag that has an onKeyDown event handler, that listens to a function called handleKeyDown.
// When you type something in the input field and press the ‘Enter key’, the handleKeyDown 
// function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:


// Part III:
// In the Events Functional component, using the state hook, declare a state variable named isToggleOn and set it to true.
// In the return, create a button that has an onClick event that will switch the state variable between ‘ON’ and ‘OFF’
// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable.

import React from 'react';

const Events = () => {
    const clickMe =() => {
        alert('I was clicked!');
    }

    const [inputValue, setInputValue] = React.useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input: ${inputValue}`);
          }
    }

    const [isToggleOn, setToggle] = React.useState(true);
    const changeToggle = () => {
        setToggle(!isToggleOn); // that was Zeev's idea, not mine
        // isToggleOn?setToggle(false):setToggle(true)
    }
    
    return (
        <div>
            <button onClick={clickMe} >CLICK ME!</button>
            <br></br>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleKeyDown} placeholder='Press the Enter key!'>
            </input>
            <br></br>
            <button onClick={changeToggle}>{isToggleOn?'ON':'OFF'}</button>
        </div>
    )
}




export default Events;