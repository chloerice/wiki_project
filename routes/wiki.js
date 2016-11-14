'use strict'

const express = require('express');
const router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res){
  res.render('index'); //?
});

router.post('/', function (req, res) {
  const newPage = req.body.content; //need to require body-parser
  res.send('Successful page creation!');
});

router.get('wiki/add/', function (req, res) {
  res.send('Create a page!');
});

module.export = router;
