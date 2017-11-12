const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbCon = require('../models/db_connection');
const db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('testing the console')
  dbCon.connectToDB(function(){
    dbCon.endConnect();
  })
  res.render('index', { title: 'Node Tree' });
});

module.exports = router;
