var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

//app.use('/', proxy({ target: 'http://www.google.com', changeOrigin: true }))
app.use('/', proxy({ target: 'http://www.ruv.is/', changeOrigin: true }))
app.listen(3000)