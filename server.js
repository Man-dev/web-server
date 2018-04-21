var express = require('express');
var app = express();
var port = 3000;
// app.get('/', function (req,res) {
// 	res.send('Hello Express!');
// });

var middleware = require('./middleware');

app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.get('/about', function (req,res) {
	res.send('This page is about us.');
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('Express server has started on port '+port+ '. Press control+C to close server.')
});