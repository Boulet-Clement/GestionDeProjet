let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index.ejs");
});

router.get("/scan", (req, res) => {
  res.render("qrcode/scan.ejs");
});

module.exports = router;
