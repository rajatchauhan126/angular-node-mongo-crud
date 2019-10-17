let async = require('async');
let documentDao = require('../DAO/document');

let getDocument = function(data, callback) {
    async.auto({
        document: (cb) =>{
            documentDao.getDocument({}, {}, {}, (err, dbData) => {
                if(err) {
                    cb(null, {statusCode: 'util.Four_Zero_Four', message : 'util.error'})
                    return;
                } else {
                    cb(null, dbData);
                    return;
                }
            })
        }
    }, (err, response) => {
        callback(response.document);
    })
}

module.exports = {
    getDocument : getDocument
}