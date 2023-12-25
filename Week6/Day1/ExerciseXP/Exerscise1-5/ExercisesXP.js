// //Exercise 1 : Find The Numbers Divisible By 23

// // Create a function call displayNumbersDivisible() that takes no parameter.
// // In the function, loop through numbers 0 to 500.
// // Console.log all the numbers divisible by 23.
// // At the end, console.log the sum of all numbers that are divisible by 23.

// function displayNumbersDivisible(){
//     sum = 0
//     for (let n=0; n<=500; n++) {
//         if (n%23 === 0){
//             console.log(n);
//             sum += n;
//         }
//     }
//     console.log(`Sum: ${sum}`)
// }
// displayNumbersDivisible();

// // Bonus: Add a parameter divisor to the function.
// function displayNumbersDivisible2(divisor){
//     sum = 0
//     for (let n=0; n<=500; n++) {
//         if (n%divisor === 0){
//             console.log(n);
//             sum += n;
//         }
//     }
//     console.log(`Sum: ${sum}`);
// }
// displayNumbersDivisible2(45);








// // Exercise 2 : Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const shoppingList = ['banana', 'orange', 'apple'];

// // Create a function called myBill() that takes no parameters.
// // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// // The item must be in stock. (Hint : check out if .. in)
// // If the item is in stock find out the price in the prices object.
// // Bonus: If the item is in stock, decrease the item’s stock by 1

// function myBill(){
//     let price = 0;
//     for (let item of shoppingList){
//         if (item in stock && stock[item]>0) {
//             price += prices[item];
//             stock[item] -=1;
//         }
//     }
//     return price;
// }

// console.log (`Total price is ${myBill()}`);



// // Exercise 3 : What’s In My Wallet ?
// // Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// // an item price
// // and an array representing the amount of change in your pocket.
// // In the function, determine whether or not you can afford the item.
// // If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// // If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false


// function changeEnough(itemPrice, amountOfChange){
//     let sum = amountOfChange[0]*0.25 + amountOfChange[1] * 0.1 + amountOfChange[2]*0.05 + amountOfChange[3]*0.01;
//     if (itemPrice > sum) {
//         return false;
//     } else {
//         return true;
//     } 
// }   
// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2,100,0,0]));
// console.log(changeEnough(0.75, [0,0,20,5]));










// // Exercise 4 : Vacations Costs/////////
// // Let’s create functions that calculate your vacation’s costs:

// // Define a function called hotelCost().
// // It should ask the user for the number of nights they would like to stay in the hotel.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // The hotel costs $140 per night. The function should return the total price of the hotel.

// function hotelCost() {
//     let numberOfNights = prompt('How many nights?');
//     while (numberOfNights == null || numberOfNights == '' || isNaN(numberOfNights)) {
//         numberOfNights = prompt('How many nights?');
//     }
//     totalPrice = 140*Number(numberOfNights);
//     return totalPrice;
// }

// // Define a function called planeRideCost().
// // It should ask the user for their destination.
// // If the user doesn’t answer or if the answer is not a string, ask again.
// // The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$

// function planeRideCost() {
//     let price;
//     let destination = prompt('Your destination');
//     while (destination == null || destination == '' || !isNaN(parseFloat(destination))) {
//         destination = prompt('Your destination');
//     }
//     switch (destination) {
//         case 'London':
//             price = 183;
//             break;
//         case '“Paris”':
//             price = 220;
//             break;
//         default:
//             price = 300;
//     }
//     return price;
// }

// // Define a function called rentalCarCost().
// // It should ask the user for the number of days they would like to rent the car.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // Calculate the cost to rent the car. The car costs $40 everyday.
// // If the user rents a car for more than 10 days, they get a 5% discount.
// // The function should return the total price of the car rental.

// function rentalCarCost(){
//     numberOfDays = prompt('How many days to rent a car?');
//     while (numberOfDays == null || numberOfDays == '' || isNaN(numberOfDays)) {
//         numberOfDays = prompt('Number of days');
//     }
//     let costOfCar;
//     if (numberOfDays < 10) {
//         costOfCar = Number(numberOfDays) * 40;
//     } else {
//         costOfCar = Math.round(Number(numberOfDays) * 40 * 1.1);
//     }
//     return costOfCar;
// }


// // Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// // Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// // Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// function totalVacationCost() {
//     hotel = hotelCost();
//     plane = planeRideCost();
//     car = rentalCarCost();
//     answer = `The car cost: ${car}$, the hotel cost: ${hotel}$, the plane tickets cost: ${plane}$. Total price is ${hotel+plane+car}$`
//     return answer
// }

// console.log(totalVacationCost())








// // Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
// function hotelCost(numberOfNights) {
//     totalPrice = 140*Number(numberOfNights);
//     return totalPrice;
// }


// function planeRideCost(destination) {
//     let price;
//     switch (destination) {
//         case 'London':
//             price = 183;
//             break;
//         case '“Paris”':
//             price = 220;
//             break;
//         default:
//             price = 300;
//     }
//     return price;
// }



// function rentalCarCost(numberOfDays){
//     let costOfCar;
//     if (numberOfDays < 10) {
//         costOfCar = Number(numberOfDays) * 40;
//     } else {
//         costOfCar = Math.round(Number(numberOfDays) * 40 * 1.1);
//     }
//     return costOfCar;
// }


// function totalVacationCost() {
//     let numberOfNights = prompt('How many nights?');
//     while (numberOfNights == null || numberOfNights == '' || isNaN(numberOfNights)) {
//         numberOfNights = prompt('How many nights?');
//     }

//     let destination = prompt('Your destination');
//     while (destination == null || destination == '' || !isNaN(parseFloat(destination))) {
//         destination = prompt('Your destination');
//     }

//     numberOfDays = prompt('How many days to rent a car?');
//     while (numberOfDays == null || numberOfDays == '' || isNaN(numberOfDays)) {
//         numberOfDays = prompt('Number of days');
//     }

//     hotel = hotelCost(numberOfNights);
//     plane = planeRideCost(destination);
//     car = rentalCarCost(numberOfDays);

//     answer = `The car cost: ${car}$, the hotel cost: ${hotel}$, the plane tickets cost: ${plane}$. Total price is ${hotel+plane+car}$`;
//     return answer;
// }

// console.log(totalVacationCost())






// // Exercise 5 : Users

// // Retrieve the div and console.log it
// const div = document.querySelector('div');
// console.log(div);
// // Change the name “Pete” to “Richard”.
// const ul = document.querySelector('ul');
// ul.lastElementChild.textContent = 'Richard';

// // Delete the second <li> of the second <ul>.
// const all_ul = document.querySelectorAll('ul');
// all_ul[1].removeChild(all_ul[1].children[1]);

// // Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
// for (let list of all_ul){
//     list.firstElementChild.textContent = 'Sveta';
// }

// // Add a class called student_list to both of the <ul>'s.
// for (let list of all_ul){
//     list.classList.add('student_list')
// }

// // Add the classes university and attendance to the first <ul>.
// all_ul[0].classList.add('university', 'attendance');


// // Add a “light blue” background color and some padding to the <div>.
// div.style.backgroundColor = 'blue';
// div.style.padding = '10px';

// // Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// for (let list of all_ul) {
//     for (let item = 0; item < list.children.length; item++) {
//         if (list.children[item].textContent === 'Dan') {
//             list.children[item].style.display = 'none';
//         }
//     }
// }
// // // or
// // all_ul[1].lastElementChild.style.display = 'none';


// // Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// for (let list of all_ul) {
//     for (let item = 0; item < list.children.length; item++) {
//         if (list.children[item].textContent === 'Richard') {
//             list.children[item].style.border = '1px dotted blue';
//         }
//     }
// }

// // // or
// // all_ul[0].lastElementChild.style.border = '1px dotted blue';
// // ul.lastElementChild.style.border = '1px dotted blue';


// // Change the font size of the whole body.
// const body = document.querySelector('body');
// body.style.fontSize = '26px';

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
// if (div.style.backgroundColor =='blue') {
//     alert(`Hello, ${all_ul[1].firstElementChild.textContent} and ${all_ul[1].lastElementChild.textContent}`);
// }





