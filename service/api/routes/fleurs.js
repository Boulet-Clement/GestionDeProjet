const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    knex.from('description').select('*')
    .then((rows) => {
        res.status(200).json(rows);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        // knex.destroy();
    });
    

});

router.get('/:id', function(req, res, next) {
    
    knex.from('description')
        .select('*')
        .where({
            'id_catalogue': req.params.id
          })
    .then((rows) => {
        res.status(200).json(rows);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
       // knex.destroy();
    });
    
});

module.exports = router;