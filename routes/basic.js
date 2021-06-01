
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
   connection.query("select * from tab_w order by ID desc",function(err,results){
    var datastring = JSON.stringify(results);
     var data= JSON.parse(datastring);
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
  res.render('ad',{obj:{},id:""});
});
//修改后台管理页面内的数据
router.get('/edit/:ID',(req,res) => {
  connection.query("select * from tab_w where ID ='"+req.params.ID+"'",function(err,results){
    if(err){
      console.log("err",err)
    }
    var data = {
      "ID":results[0].ID,
      "username":results[0].username,
      "phone":results[0].phone,
      "book_time":results[0].book_time,
    }
    console.log('result:',data);
    res.render('abasic',{"detail":data});
  });
});
//后台用户信息编辑表单
router.post('/edit',(req,res) => {
  connection.query("UPDATE tab_w SET username=?,phone=?,book_time=? WHERE ID=?",[req.body.username,req.body.phone,req.body.book_time,req.body.ID],function(err,results){
    if(err){
      console.log("err",err)
    }else{
      res.redirect('/basic');
  //   connection.query("select * from tab_w order by ID desc",function(err,results){
  //   var datastring = JSON.stringify(results);
  //    var data= JSON.parse(datastring);
  //   res.render('basic',{"detail":data});
  // });
  }
})
})

module.exports = router;