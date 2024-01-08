// Create a file named app.js in the same directory.
// In app.js, require the lodash package and the custom math module.
// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
// Run app.js using Node.js and verify that the calculations are correct.

import {mySum, myMultiple} from "./math.js";


console.log(mySum(2,3));
console.log(myMultiple(2,3));