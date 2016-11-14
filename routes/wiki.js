'use strict'

const express = require('express');
const router = express.Router();

//router.use(express.static('./public'));

router.get('/', function(req, res){
  //res.redirect('/');
  res.redirect('/'); //?
  
});

router.post('/', function (req, res) {
  //const newPage = req.body.content; //need to require body-parser
  res.send('Successful page creation!');
});

router.get('/add', function (req, res) {
  res.render('../views/addpage.html');
});

module.exports = router;
