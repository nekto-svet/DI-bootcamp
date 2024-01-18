// Exercise 4 : UseEffect Hook

// Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.
// Output the value in a header tag.

// Note : The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”

// Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.


import React from 'react';

const Color = () => {

    const [color,setColor] = React.useState('red');

    React.useEffect(()=>{
        alert('useEffect reached')
        setColor('yellow')
    }, []) 

    const changeToBlue = () => {
        setColor('blue')
    }

    return (
        <div>
            <h3>My favorite color is {color}</h3>
            <button onClick={changeToBlue}>Change to Blue</button>
        </div>
    )
}

export default Color;