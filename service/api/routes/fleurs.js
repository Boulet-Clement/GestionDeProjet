const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const qr = require("qrcode");

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

router.post("/scan", (req, res) => {
    const url = req.body.url;

    // If the input is null return "Empty Data" error
    if (url.length === 0) res.send("Empty Data!");
    
    // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
    // It shall be returned as a png image format
    // In case of an error, it will save the error inside the "err" variable and display it
    
    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
        // Let us return the QR code image as our response and set it to be the source used in the webpage
        res.render("scan", { src });
    });
});

module.exports = router;