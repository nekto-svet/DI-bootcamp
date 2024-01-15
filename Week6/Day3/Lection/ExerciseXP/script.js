// ------------------------Exercise 1 : Scope--------------------------
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}
//--ANSWER--
//${a}==3, because 'a' was declared inside 'funcOne', outside 'if' block. So it can be redefined inside 'if' block 

// #1.1 - run in the console:
funcOne();
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//--ANSWER--
//const can't be redefined, will be error

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}
//--ANSWER--
//if we will call just 'funcThree' output will be 0.
//if we will call 'funcThree' after calling 'funcTwo' output will be 5, because 'a' was declared and defined in global scope and redeclared in 'funcTwo'

// #2.1 - run in the console:
funcThree();
funcTwo();
funcThree();
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//--ANSWER--
//const can't be redefined, will be error



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}

//--ANSWER--
// will be error because a wasn't declared not in global scope, nor in 'funcFour'

// #3.1 - run in the console:
funcFour();
funcFive();

// --WRONG--
//--real output--
// inside the funcFive function hello
//because we declared a in window


//#4
let b = 1;
function funcSix() {
    let b = "test";
    console.log(`inside the funcSix function ${b}`);
}

//--ANSWER--
//output will be 'test' because function look for variable in it's scope first, than in global scope


// #4.1 - run in the console:
funcSix();
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//--ANSWER--
//output still will be 'test' because function will find variable inside it's scope. There wil be no conflict between 'b' in global scope and 'b' in 'funcSix', because 'b' inside function block not available from global scope

//#5
let c= 2;
if (true) {
    let c = 5;
    console.log(`in the if block ${c}`);
}
console.log(`outside of the if block ${c}`);

//--ANSWER--
// output will be '5' and '2' because inside 'if' block 'c' was declader and defined, but 'c' in global scope wasn't redefined.  
//may be if inside 'if' block will be just 'c=5', output will be '5' and '5' because 'c' is redeclared

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

//--ANSWER--
// output will be the same, because const in 'if' block not available from global scope



// -----------------Exercise 2 : Ternary Operator------------------
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

function winBattle(){
    return true;
}

const winBattleArrow = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// --------------------Exercise 3 : Is It A String ?------------------------
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = (arg) => typeof arg == 'string' ? true : false;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false



// ---------------------Exercise 4 : Find The Sum------------------------
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const findSum = (num1,num2) => num1+num2;
console.log(findSum(1,2));


// ---------------------Exercise 5 : Kg And Grams-------------------------
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kgToGr (kg) {
    return kg*1000;
}
console.log(kgToGr(2));

const kgToGr2 = function (kg) {
    return kg*1000;
}
console.log(kgToGr2(3));

//difference between function declaration and function expression
// is that function declaration has a name, and for function expression we declare a variable and define a func inside it

const kgToGr3 = kg => kg*1000;
console.log(kgToGr3(4));


// --------------------Exercise 6 : Fortune Teller----------------------

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (children, partner, location, job) {
    const body = document.querySelector('body');
    const newDiv = document.createElement('div');
    newDiv.style = 'margin-top: 30px; font-size: 30px';
    newDiv.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    body.insertBefore(newDiv, body.firstChild);
})(44, 'Jim Carrey', 'Yemen', 'pandas keeper');



// ----------------------Exercise 7 : Welcome------------------------------
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
const body = document.querySelector('body');
const navbar = document.createElement('nav');
navbar.style = 'height : 70px; background-color: gray; margin-bottom: 15px';
body.insertBefore(navbar, body.firstChild);

(function (name) {
    const newDiv = document.createElement('div');
    newDiv.style = 'padding: 15px; margin-left: 30px; font-size: 30px';
    newDiv.textContent = name;
    navbar.appendChild(newDiv);
})('John');



// ----------------------Exercise 8 : Juice Bar------------------------
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size){

    const ingredients = [];
    
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    addIngredients('lemon', 'banana', 'coconat');
    addIngredients('apple', 'caramel', 'pine');

    function displayJuice(){
        const order = document.createElement('div');
        order.style = 'margin-top: 30px; font-size: 30px';
        let text = `The client wants a ${size} juice, containing `;
        for (let i in ingredients){
            if (i == ingredients.length - 1) {
                text += `${ingredients[i]}.`;
            } else {
                text += `${ingredients[i]}, `;
            }
        }
        order.textContent = text;
        body.appendChild(order);
    }
    return displayJuice();
}

newOrder = makeJuice('small');