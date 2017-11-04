
var Product = require("../models/product");

module.exports = function(router) {
    router.route('/products')    
    .post(function(req, res) {
        console.log(req.body);
        var product = new Product();     
        product.name = req.body.name; 
        product.brand = req.body.brand;
        product.comment = req.body.comment;
        product.price = req.body.price;
        product.market = req.body.market;
        product.category = req.body.category;
        // save the bear and check for errors
        product.save(function(err, createdProduct) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Product created!', product: createdProduct });
        });

    })
    .get(function(req, res) {
        Product.find(function(err, bears) {
            if (err)
                res.send(err);
            else
                res.json(bears);
        });
    });

    router.route('/products/:product_id')    
    .put(function(req, res) {

        var product = new Product();     
        product.name = req.body.name; 
        product.brand = req.body.brand;
        product.comment = req.body.comment;
        product.price = req.body.price;
        product.market = req.body.market;
        product.category = req.body.category;
        // save the bear and check for errors
        product.save(function(err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Product created!' });
        });

    })
    .get(function(req, res) {
        Product.find({
            _id: req.params.product_id
        }, function(err, bear) {
            if (err)
                res.send(err);
            else
                res.json(bear);
        });
    })
    .delete(function(req, res) {
        Product.remove({
            _id: req.params.product_id
        }, function(err, bear) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Successfully deleted' });
        });
    });

};