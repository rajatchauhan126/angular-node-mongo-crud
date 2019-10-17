let Models = require('../Models/Document');

let getDocument = (criteria, projection, options, callback) => {
    options.lean = true;
    Models.find(criteria, projection, options, callback)
}

module.exports = {
    getDocument: getDocument
}