// ------------------🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax----------------

// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.

const products = [
    {
        name: 'duvet',
        price: 60,
        category: 'everything for a sick'
    },
    {
        name: 'tea',
        price: 20,
        category: 'everything for a sick'
    },
    {
        name: 'paper handkerchiefs',
        price: 5,
        category: 'everything for the sick'
    },
];

module.exports = {products};