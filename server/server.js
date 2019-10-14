let app = require('express')(),
    server = require('http').Server(app),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path');

let documentRoute = require('./Routes/document'),
    util = require('./Utilities/util');

let mongoose = require('./Utilities/mongooseConfig')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let allowedHost = [
    'http://localhost:4200'
]
app.use(cors({
    origin: function(origin, callback) {
        if(!origin) {
            return callback(null, true);
        }
        if(allowedHost.indexOf(origin) === -1 ) {
            var msg = 'The CORS policy for this site does not allow access from specific origin';
            return callback(new Error(msg), false)
        }
        return callback(null, true);
    }
}));

app.use((err, req, res, next) => {
    return res.send({})
})

app.use('/document',documentRoute);

// app.use('*', () => {
//     return
// })

server.listen(3000,(err, res) => {
    console.log('server is running on port 3000');
})
