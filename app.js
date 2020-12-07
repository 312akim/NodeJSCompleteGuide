const path = require('path');

const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser')

const errorController = require('./controllers/error');

    // Creates express application
const app = express();


    // PUG
    // Set global config value in express application. Key Names or save data
    // 'view engine' KeyWord, sets global app template engine
app.set('view engine', 'ejs');

    // KeyWord, Where you are storing templates ie shop.pug
        // Need to render actual files in routes.js files
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// .use allows you to add a new middleware function
    // Function passed will be used for every incoming request

    // Body parser middleware. Before routes
app.use(bodyParser.urlencoded({extended: false}));
    // Serves file statically to grant read access. Forwards file requests to public
app.use(express.static(path.join(rootDir, "public")));

        // Valid middleware Function
app.use('/admin', adminRoutes);
app.use(shopRoutes);


    //Catch-all
app.use(errorController.get404);

app.listen(3000);