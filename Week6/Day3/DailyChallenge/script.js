// ----------------Daily Challenge: Groceries----------------
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.


let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = groceries.fruits.forEach((element)=> {
    console.log(element);
})

const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    //nothing changed in user, because when we pass primitive value to the variable we make independent copy

    let shopping = groceries;
    groceries.totalPrice = '35$';
    groceries.other.paid = false
    // totalPrice and paid changed, because when we pass object to the variable we just referencing it

    return user, shopping
};

console.log(cloneGroceries())

