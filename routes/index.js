var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/healthz', function(req, res, next) {
  res.send({
    "status":"i am alive"
  });
});

module.exports = router;
