// Exercise 3 : Phone And Components
// Part I : Phone
// Create a new Functional Component named Phone. Use the state hook to create the following state variables:
// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020
// In the return of the Phone component, display the values of the state variables.

// Part II : Change the Phone
// In the Phone component create a function named changeColor that updates the state variable to ‘blue’
// In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.
// Expected output (without the grey border):when you click the button




import React from 'react';

const Phone = () => {
    const [brand,setBrand] = React.useState('Samsung');
    const [model,setModel] = React.useState('Galaxy S20');
    const [color,setColor] = React.useState('black');
    const [year,setYear] = React.useState(2020);

    const changeColor = () => {
        setColor('blue');
    }

    return (
        <div>
            <h2>My phone is {brand}</h2>
            <h3>It is a {color} {model} from {year}</h3>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Phone;