// Main Application
var express 		= require('express');
var app 			= module.exports = express();
var path            = require('path');

var server = express()
    .use('/app', express.static("./app"))
    .use('/scripts', express.static(__dirname + './node_modules/'))
    .all('/*', function (req, res, next) {
        res.sendFile('/app/index.html', {root: __dirname});
    })
    .listen(process.env.PORT || 3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Instads REST API listening at http://%s:%s', host, port);
    });

