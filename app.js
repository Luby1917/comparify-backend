var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comparify');

var Product = require("./models/product");
var Category = require("./models/category");
var Market = require("./models/market");
var Brand = require("./models/brand");

var port = process.env.PORT || 3000; 

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

require('./router/products')(router);
require('./router/categories')(router);
require('./router/markets')(router);
require('./router/brands')(router);

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});




// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port, function(){
    console.log('Magic happens on port ' + port);
});

