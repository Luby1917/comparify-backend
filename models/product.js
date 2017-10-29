var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategorySchema = require("./category");
var MarketSchema = require("./market");
var BrandSchema = require("./brand");

var ProductSchema   = new Schema({    
    name: {type: String, required: true},
    brand:  {type: String, required: true},
    comment: String,
    price:  {type: Number, required: true},
    market:  {type: String, required: true},
    category: {type: String, required: true},
        
});

module.exports = mongoose.model('Product', ProductSchema);
