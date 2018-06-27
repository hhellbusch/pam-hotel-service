var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
});

router.get('/vacancy', function(req, res, next){
  //does a vacancy exist?
  //for now - just do this randomly
  let result = Math.random() >= 0.1;
  res.send(result);
});


router.post('/hotel', function(req, res, next){
  throw new Error("not yet implemented");
  // recieve input and insert a hotel
  // return the saved data
});

router.get('/hotel/:id/vacancy', function(req, res, next) {
  throw new Error("not yet implemented");
  //find the hotel w/ the ID
  //check for a vacancy
  res.send();
});

module.exports = router;
 