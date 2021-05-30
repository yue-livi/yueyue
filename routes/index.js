var express = require('express');
var router = express.Router();
var db=require('./db');
// /* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select*from tab_work",(err,result)=>{
    // console.log(result);
  });
  res.render('index', { data: 'result' });
});



module.exports = router;
// var city = req.query.city
// var check_in = req.query.check_in
// var check_out=req.query.check_out
// var adult=req.query.adult
// var children=req.query.children
// var room=req.query.room
// var use = [city,check_in,check_out,adult,children,room];
// var query1 = 'insert into d_z(city,check_in,check_out,adult,children,room) values(?,?,?,?,?,?)';
