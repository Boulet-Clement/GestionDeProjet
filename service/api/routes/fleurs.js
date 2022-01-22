const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    
    res.status(200).json(commandes);

});

module.exports = router;