const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

// Like mini express app. Basically replaces app in app.js
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);


module.exports = router;