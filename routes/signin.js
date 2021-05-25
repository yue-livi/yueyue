let express =require('express');
let router =express.Router();



var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'qiuyue'
});
connection.connect();

router.get('/', function (req, res) {
  res.render('signin');
});
router.post('/signin', (req, res) => {


  var selectSQL = "select Name,password from qy2 where Name = '" + req.body.Name + "' and password = " + req.body.password + "";
  connection.query(selectSQL, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else {
        if(result == ''){
          res.send('登录失败');
        }
      else {
       
          if (req.body.Name=="YY" && req.body.password==0556) {
            res.redirect('/index');
          }
          else {
            res.redirect('/home');
          }
      }
    }
        });
});


  module.exports = router;
/*
var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'qiuyue'
})

connection.connect();

/*router.get('/',(req,res) => {
    res.render('signin');
});

router.post('/',(req,res)=>{
    let Name=req.body.Name;
    let password=req.body.password;
  
    if(req.session.user != undefined && Name==req.session.user.Name
        && password==req.session.user.password
        && confirm_password==req.session.user.confirm_password
        ){
          res.render('signin', { title: 'Express' });
        }else{
            res.end("fail!");
        }

});
module.exports=router;*/
/*var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "qiuyue"
});
connection.connect();

router.get('/', function (req, res) {
  res.render('signin');
});
router.post('/signin', (req, res) => {


  var selectSQL = "select Name,password from qy2 where Name = '" + req.body.Name + "' and passwoed = " + req.body.password + "";
  connection.query(selectSQL, function (err, result, fields) {

    //   if (err) {
    //       console.log('err', err);
    //       return;
    //   } else {
       
          if (result == '') {
              res.send('登录失败');
          }
          else {
            res.redirect('/index');
          }
      }
  );
});
*/