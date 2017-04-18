var path = require('path');
var express = require('express');

var port = process.env.PORT || '9001';
var rootPath = path.normalize(__dirname);

var app = express();
var deployFolder = "app";

app.use('/app', express.static(path.resolve(path.join(__dirname, deployFolder))));

app.get('/', function (req, res) {
    return res.redirect('/app');
});

app.set('view engine', 'html');
app.set('views', path.join(rootPath, deployFolder));

app.listen(port, undefined, function () {
    console.log('Listening on port %d', port);
});
