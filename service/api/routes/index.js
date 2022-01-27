let express = require('express');
let router = express.Router();
const qr = require("qrcode");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index.ejs");
});

router.get("/scan", (req, res) => {
  res.render("qrcode/scan.ejs");
});

router.get('/qrcode/:id', function(req, res, next) {
  const url = "/fleurs/" + req.params.id;

  // If the input is null return "Empty Data" error
  if (url.length === 0) res.send("Empty Data!");
  
  // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
  // It shall be returned as a png image format
  // In case of an error, it will save the error inside the "err" variable and display it
  
  qr.toDataURL(url, (err, src) => {
      if (err) res.send("Error occured");
    
      // Let us return the QR code image as our response and set it to be the source used in the webpage
      res.render("qrcode/qrcodeFleur", { src });
  });
  
});

module.exports = router;
