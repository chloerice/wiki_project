const express = require('express');
const wikiRouter = require('./routes/wiki');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models');


//app.use('/', routes);

app.use('/wiki', wikiRouter);

app.use('/', function(req, res){
	res.render('../views/index.html'); 
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

models.Page.sync()
.then(function () {
  return models.User.sync()
})
.then(function () {
  app.listen(1337, function () {
    console.log('Listening on port: 1337...');
  });
})
.catch(console.error);
