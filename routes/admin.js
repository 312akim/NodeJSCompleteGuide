const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

// Like mini express app. Basically replaces app in app.js
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {

    res.render(
        'add-product', 
        {pageTitle: 'Add Product', 
        path: '/admin/add-product'}
    )

    /* Static HTML Render
    // Default html/text can override using res.setHeader
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    */
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
});


exports.routes = router;
exports.products = products;