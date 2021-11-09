const express = require('express');
const router = express.Router();

const { getProducts, createProduct, getProductById, deleteProductById } = require('../controllers/products')

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:productId')
    .get(getProductById)
    .delete(deleteProductById);

module.exports = router;


function getData(req, res, next) {
    return res.json({ products: [{}] })
}