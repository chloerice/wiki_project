'use strict'

const express = require('express');
const router = express.Router();

router.use(express.static('./public'));

router.get('/', function(req, res, next){
  res.render('index');
});

module.export = router;
