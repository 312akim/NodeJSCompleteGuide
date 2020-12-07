const path = require('path');

const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser')

    // Creates express application
const app = express();


    // PUG
    // Set global config value in express application. Key Names or save data
    // 'view engine' KeyWord, sets global app template engine
app.set('view engine', 'ejs');

    // KeyWord, Where you are storing templates ie shop.pug
        // Need to render actual files in routes.js files
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// .use allows you to add a new middleware function
    // Function passed will be used for every incoming request

    // Body parser middleware. Before routes
app.use(bodyParser.urlencoded({extended: false}));
    // Serves file statically to grant read access. Forwards file requests to public
app.use(express.static(path.join(rootDir, "public")));

        // Valid middleware Function
app.use('/admin', adminData.routes);
app.use(shopRoutes);


    //Catch-all
app.use('/', (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});

    /* Static HTML 404 Page
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    */
});

app.listen(3000);