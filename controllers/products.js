const products = [];

exports.getAddProduct = (req, res, next) => {

    res.render(
        'add-product', 
        {pageTitle: 'Add Product', 
        path: '/admin/add-product'}
    )

    /* Static HTML Render
    // Default html/text can override using res.setHeader
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    */
}

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // Uses default template engine & return from specified folder by name
                        // Map data to obj & key name. Can now access key in template
    res.render(
        'shop', 
        {
            pageTitle: 'Shop', 
            prods: products, 
            path: "/"
        }
    );



    /*  Static HTML Page Rendiner
    console.log('shop.js', adminData.products);
    // Default html/text can override using res.setHeader
                        // Builds absolute path on Windows & Linux
                        // This file, up 1, views folder, shop file
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    */
}