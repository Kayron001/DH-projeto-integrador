var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET pagina de chekout
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});

module.exports = router;
