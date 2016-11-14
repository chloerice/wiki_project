'use strict'
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

//router.use(express.static('./public'));

router.get('/', function(req, res){
  res.redirect('/');
});

router.post('/', function (req, res) {
  // const newPage = {
  //   title: req.body.title,
  //   urlTitle: ,
  //   content: req.body.content
  // }; 
  res.send('Successful page creation!');
});

router.get('/add', function (req, res) {
  res.render('../views/addpage.html');
});

module.exports = router;
