//Exercise 3 : Transform The Sentence

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).

let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}
getBoldItems();

function highlight() {
    for (let i in allBoldItems) {
        allBoldItems[i].style.color = 'blue';
    }
}

function returnItemsToDefault() {
    for (let i in allBoldItems) {
        allBoldItems[i].style.color = 'black';
    }
}

for (let i in allBoldItems) {
    allBoldItems[i].addEventListener("mouseover", highlight);
    allBoldItems[i].addEventListener("mouseout", returnItemsToDefault);
}

// I dont understand why everything works. but in cosole I see this errors:
// script.js:37 Uncaught TypeError: allBoldItems[i].addEventListener is not a function
//     at script.js:37:21
// (anonymous) @ script.js:37
// script.js:26 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at HTMLElement.highlight (script.js:26:37)
// highlight @ script.js:26
// script.js:32 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at HTMLElement.returnItemsToDefault (script.js:32:37)