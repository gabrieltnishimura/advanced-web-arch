var path = require('path');
var express = require('express');

var port = process.env.PORT || '9001';
var rootPath = path.normalize(__dirname);

var app = express();
var deployFolder = "app";

var server = express()
	.set('view engine', 'html')
	.use('/api/v1', app) // backend is express app
	.use('/', express.static("./app")) // www is public/static files
	.all('/*', function (req, res, next) {
		res.sendFile('/app/index.html', {root: __dirname});
	})
	.listen(port, function () {
		console.log('Listening at %s', port);
	});

app.use(express.static("./app"));
app.get('/home', function (req, res) {
    return [{
		'id': '1',
		'title': 'Title',
		'comment': 'Lorem'
	},{
		'id': '2',
		'title': 'Second',
		'comment': 'Ipsum'
	}];
});

app.set('views', path.join(rootPath, deployFolder));

