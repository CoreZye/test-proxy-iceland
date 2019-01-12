var express = require('express');
var proxy = require('http-proxy-middleware');

var port = process.env.PORT || 3000;

var app = express();

app.use('/', proxy({ target: 'http://www.ruv.is/', changeOrigin: true }));
app.listen(port, function() {
	console.log(`Example app listening on port !`);
});