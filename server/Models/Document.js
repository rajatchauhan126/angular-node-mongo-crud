let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Document = new Schema({
    documentTitle : {
        type: String,
        default: '',
        trim: true
    },
    desc: {
        type: String,
        default: '',
        trim: true
    },
    publishser: {
        default: String,
        type: String,
        trim: true
    },
    updatedOn : {
        default: Date.now,
        type: Date
    }
})

module.exports = mongoose.model('Document', Document);
