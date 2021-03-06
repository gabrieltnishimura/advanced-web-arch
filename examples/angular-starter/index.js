// Main Application
var express 		= require('express');
var app 			= module.exports = express();
var path            = require('path');

var server = express()
    .use(express.static("./app"))
    .use(express.static("./node_modules"))
    .all('/*', function (req, res, next) {
        res.sendFile('/app/index.html', {root: __dirname});
    })
    .listen(process.env.PORT || 3000, function () {
        var port = server.address().port;
        console.log('Instads REST API listening at http://localhost:%s', port);
    });

