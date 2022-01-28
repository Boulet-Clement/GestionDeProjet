let express = require('express');
let router = express.Router();

/* GET home page. */

router.get('/start', function(req, res, next) {
  res.render("jeu/start.ejs");
});

router.get('/', function(req, res, next){
    res.render("jeu/jeu.ejs");
  });

module.exports = router;
