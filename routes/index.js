var express = require('express');
var router = express.Router();
var db=require('./db');
/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from tab_work",(err,result)=>{
    // console.log(result);
  });
  res.render('index', { data: result});
});
router.get('/', function (req, res, next) {
      var sql = 'select * from tab_work';
      connection.query(sql, function (err, result, fields) {
          if (err) {
              console.log('err', err);
              return;
          } else { res.render('index', { data: result }); }
      });
  });



module.exports = router;

