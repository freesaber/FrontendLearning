var express = require('express');
var router = express.Router();

router.get('/todolist', function(req, res, next) {
  res.json({
    code:'0',
    msg:null,
    data:['A','B','C']
  });
});

module.exports = router;
