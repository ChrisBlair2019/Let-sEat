var express = require('express');
var router = express.Router();
var util = require('util');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/letsEatDB');

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  lat: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  preference:String,
});

var GroupSchema = new mongoose.Schema({
  title: String,
  description: String,
  restAddress: String,
  inviter: userSchema,
  invitedusers:[userSchema]
});


router.post("/saveuserdata", function(req, res) {
  console.log(res);
  console.log(req.body);
  res.sendStatus(200);
});

router.post("/creategroup", function(req, res){
  console.log(res);
  console.log(req.body);
  res.sendStatus(200);
});


router.use(express.static('Public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/index.html',{root:__dirname});
});


module.exports = router;
