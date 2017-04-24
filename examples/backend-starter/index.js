// Main Application
var express 		= require('express');
var path            = require('path');
var app = express();
var port = process.env.PORT || 9001;

var server = express()
	.use('/api/v1', app)
    .listen(port, function () {
        console.log('Backend listening at http://localhost:%s', port);
    });

app.get('/home', function (req, res) {
    res.send([{
		'id': '1',
		'title': 'Title',
		'comment': 'Lorem'
	},{
		'id': '2',
		'title': 'Second',
		'comment': 'Ipsum'
	}]);
});