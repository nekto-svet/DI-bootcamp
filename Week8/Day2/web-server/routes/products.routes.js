const express = require("express");

const products_router = express.Router();

const {getAllProducts, searchProduct, newProduct, updateProduct, deleteProduct} = require('../controller/products.controller.js');


products_router.get('/', getAllProducts)

products_router.get('/:products_id', searchProduct)

products_router.post('/', newProduct)

products_router.put('/:id', updateProduct);

products_router.delete('/:id', deleteProduct);



module.exports = {
    products_router
}