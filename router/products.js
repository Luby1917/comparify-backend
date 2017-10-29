
var Product = require("../models/product");

module.exports = function(router) {
router.route('/products')

    
    .post(function(req, res) {

        var product = new Product();     
        Product.name = req.body.name; 
        Product.brand = req.body.brand;
        Product.comment = req.body.comment;
        Product.price = req.body.price;
        Product.market = req.body.market;
        Product.category = req.body.category;
        // save the bear and check for errors
        product.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product created!' });
        });

    })
    .get(function(req, res) {
        Product.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

};