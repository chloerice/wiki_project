'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;


//router.use(express.static('./public'));

router.get('/', function(req, res, next){
  res.redirect('/');
});

router.post('/', function (req, res, next) {
  var page = Page.build({
  		title: req.body.title,
  		content: req.body.content

  });
  page.save()
  .then(function (newPage) {
  	res.redirect('/')
  })
  .catch(function (err) {
  	next(err);
  });
});

router.get('/add', function (req, res, next) {
  res.render('../views/addpage.html');
});

module.exports = router;
