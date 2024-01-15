// control DB
const{products} = require('../config/DB.js')

const getAllProducts = (req, res) => {
    res.json(products)
}

const searchProduct =  (req, res) => {
    const {products_id} = req.params;
    const product = products.find(item => item.id == products_id);
    console.log(product);
    if(!product) return res.status(404).json({msg:'product not found'})
    res.json(product)
};

const newProduct = (req, res)=> {
    console.log(req.body);
    const new_product = {...req.body, id: products.length+1};
    products.push(new_product);
    res.status(201).json(products); 
}

const updateProduct = (req, res) =>{ 
    const {id} = req.params;
    
    const product = products.find(item => item.id == id);
    if (!product) return res.sendStatus(404);
    product.name = req.body.name;
    product.desc = req.body.desc;

    res.json(products);
}

const deleteProduct =  (req, res) =>{
    const {id} = req.params;
    const productInd = products.findIndex(item => item.id == id);
    if (productInd == -1) return res.sendStatus(404);
    products.splice(productInd,1)

    res.json(products);
}

module.exports = {
    getAllProducts,
    searchProduct,
    newProduct,
    updateProduct,
    deleteProduct,
}