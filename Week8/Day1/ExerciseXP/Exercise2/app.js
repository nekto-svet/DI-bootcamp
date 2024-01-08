// ----------------🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax-----------------

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.



import {persons} from './data.js';

const averageAge = (arr) => {
    let age = 0;
    arr.forEach(item => age+=item.age);
    console.log(age/arr.length);
}

averageAge(persons);