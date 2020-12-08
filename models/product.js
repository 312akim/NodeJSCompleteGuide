const fs = require('fs');
// Construct path that works on all OS
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(
    rootDir, 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
                // need parse or returned as string.
            return cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            // Write path, Put JSON data into file
                        // Stringify converts obj or array to JSON
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // Static - Able to call on class itself, not instanced object
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}