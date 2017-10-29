var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MarketSchema   = new Schema({
    name: String,
    location: String,
});

module.exports = mongoose.model('Market', MarketSchema);
