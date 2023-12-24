// // Exercise 1 : List Of People
// const people = ["Greg", "Mary", "Devon", "James"];

// // Write code to remove “Greg” from the people array.
// people.shift();
// console.log(people);

// // Write code to replace “James” to “Jason”.
// people.splice(2,1, 'Jason');
// console.log(people);

// // Write code to add your name to the end of the people array.
// people.push('Sveta');
// console.log(people);

// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf('Mary'));

// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name
// people_new = people.slice(1,3);
// console.log(people);
// console.log(people_new);

// // Write code that gives the index of “Foo”. Why does it return -1 ?
// console.log(people.indexOf('Foo'));
// // It returns -1 because it cant find Foo in this array

// // Create a variable called last which value is the last element of the array.
// let last = people[people.length - 1];
// console.log(last);

// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.
// for (let p of people) {
//     console.log(p);
// }

// // Using a loop, iterate through the people array and exit the loop after you console.log “Devon”
// for (let p of people) {
//     console.log(p);
//     if (p == 'Devon') {
//         break
//     }
// }




// // Exercise 2 : Your Favorite Colors
// // Create an array called colors where the value is a list of your five favorite colors.
// let colors = ['Green', 'Yellow', 'Indigo'];

// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// for (let color of colors) {
//     console.log(`My #${colors.indexOf(color)+1} choice is ${color}`)
// }

// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// for (let color of colors) {
//     let suff;
//     switch (colors.indexOf(color) + 1) {
//         case 1:
//             suff = 'st';
//             break;
//         case 2:
//             suff = 'nd';
//             break;
//         case 3:
//             suff = 'rd';
//             break;
//         default:
//             suff = 'th';
//     }
//     console.log(`My ${colors.indexOf(color) + 1}${suff} choice is ${color}`);
// }
    
// // Exercise 3 : Repeat The Question
// Prompt the user for a number.
// let userPromt = prompt('Give me a number')
// console.log(typeof(userPromt))

// // While the number is smaller than 10 continue asking the user for a new number.
// let userPrompt= prompt('Give me a number')
// while (parseInt(userPrompt) < 10) {
//     userPrompt = prompt('Give me a new number');
//   }




// // Exercise 4 : Building Management
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // Console.log the number of floors in the building.
// let i = 0
// for (let k in building.numberOfAptByFloor) {
//     i++
// }
// console.log(i);

// // Console.log how many apartments are on the floors 1 and 3.
// console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

// // Console.log the name of the second tenant and the number of rooms he has in his apartment
// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// if (building.numberOfRoomsAndRent.dan[1] < building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);



// //  Exercise 5 : Family
// let family = {
//     mother: 'Tania',
//     phather: 'Alex',
//     doughter: 'Marina',
// }

// // Using a for in loop, console.log the keys of the object.
// for (let k in family) {
//     console.log(k)
// }

// // Using a for in loop, console.log the values of the object.
// for (let k in family) {
//     console.log(family[k])
// }



// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
res = '';
for (let k in details) {
    res += `${k} `;
    res+= `${details[k]} `;
}
console.log(res)




// Exercise 7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Console.log the name of their secret society. The output should be “ABJKPS”
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let nameOfSociety = '';
for (let n of names.sort()) {
    nameOfSociety += n[0];
}
console.log(nameOfSociety)
