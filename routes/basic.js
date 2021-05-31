
const { json } = require('express');
var express = require('express');
var router = express.Router();
var path = require('path');
let data = new Array();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "oo"
});


router.get('/',(req,res) => {
   connection.query("select * from tab_w order by id desc",function(err,results){
    var datastring = JSON.stringify(results);
    var data = JSON.parse(datastring);
    res.render('basic',{
      "detail":data
    });
  })
});

//删除后台管理页面的数据
router.get('/delete/:ID',(req,res) =>{
  connection.query("delete from tab_w where ID ='"+req.params.ID+"'",function(){
    res.redirect('/basic')
  })
});

//修改后台管理页面内的数据
router.get('/edit/:id',(req,res) => {
  connection.query("select * from tab_w where id ='"+req.params.id+"'",function(err,results){
    if(err){
      console.log("err",err)
    }
    var data = {
      "id":results[0].id,
      "name":results[0].name,
      "phone":results[0].phone,
      "book_time":results[0].book_time,
    }
    console.log('result:',data);
    res.render('abasic',{"detail":data});
  });
});

//后台用户信息编辑表单
router.post('/edit/:id',(req,res) => {
  connection.query("update tab_w set username = '"+req.body.username+"',phone = '"+req.body.phone+"',book_time = '"+req.body.book_time+"'  where id='"+req.body.id+"'",function(err,results){
    if(err){
      console.log("err",err)
    }
    res.redirect('/basic')
  });
});

//后台查询
router.post('/', (req, res) => {
  var searchSQL = "select * from tab_w where username = '" + req.body.username + "'";
  connection.query(searchSQL, function (err, results) {
      if (err) {
          console.log('err', err);
          return;
      }
      if (results == '') {
          console.log('nonono');
      }
      var datastring = JSON.stringify(results);
      var data = JSON.parse(datastring);
      console.log('result:',data);
      res.render('basic',{"detail":data})
      })
    });
      


router.get('/abasic',(req,res) =>{
  res.render('abasic',{detail:{},id:""});
});
module.exports = router;