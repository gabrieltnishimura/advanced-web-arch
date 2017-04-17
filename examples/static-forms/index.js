var express 		= require('express');
var bodyParser 		= require('body-parser');
var app 			= express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.listen(3000, function () {
    console.log('Server@Port 3000!');
});

app.post('/form', function (req, res) {
	res.send("Username: " + req.body.username + "\nPassword: " + req.body.password);
});