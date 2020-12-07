const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    
    // Uses default template engine & return from specified folder by name
                        // Map data to obj & key name. Can now access key in template
    res.render('shop', {pageTitle: 'Shop', prods: products, path: "/"});



    /*  Static HTML Page Rendiner
    console.log('shop.js', adminData.products);
    // Default html/text can override using res.setHeader
                        // Builds absolute path on Windows & Linux
                        // This file, up 1, views folder, shop file
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    */
});

module.exports = router;