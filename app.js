const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();


//app.use('/', routes);

app.use('/', function(req, res, next){
	console.log(req);
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});