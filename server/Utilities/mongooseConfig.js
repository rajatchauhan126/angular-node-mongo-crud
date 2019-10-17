let mongoose = require('mongoose');
mongoose.set('debug', true);


module.exports = function() {
    let db = mongoose.connect('mongodb://localhost:27017/angular6-crud')
    return db;
}