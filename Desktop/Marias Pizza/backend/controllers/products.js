const { response } = require("express");
const Products = require("../models/productModel");


// Get all product models that exist in our Mongo DB Database
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find();

        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

// PARAMS - URL Variable data
exports.getProductById = async (req, res, next) => {
    console.log('get product by id: ', req.params);
    try {
        const product = await Products.findById(req.params.productId)

        if (!product) {
            // no products found that match the given id
            return res.status(400).json({ success: false, message: "no product found" })
        }

        res.status(200).json({ success: true, data: product })

    }
    catch (error) {
        console.log("error")
        // incorrect format error or something else
        res.status(400).json({ success: false, error: "Incorrect Product ID" })
    }

}

// BODY - form data
exports.createProduct = async (request, response, next) => {
    try {
        const product = await Products.create(request.body);

        response.status(201).json({ success: true, data: product })
    } catch (error) {
        response.status(400).json({ success: false, error: error.message })
    }
}

exports.deleteProductById = async (req, res, next) => {
    try {
        const produt = await Products.findByIdAndDelete(req.params.productId);

        if (!product) {
            // no products found that match the given id
            return res.status(400).json({ success: false, message: "no product found" })
        }

        res.status(200).json({ success: true, data: {} })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}

// STUFF TO WORK ON
// See if you can do this
// update - Products.findByIdAndUpdate(id, data)

// Connecting to these functions using axios requests from react project