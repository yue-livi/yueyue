let express=require('express');
let router=express.Router();
//let User=require('./bean/user');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "qiuyue"
});
connection.connect();


router.get('/',(req,res)=>{
    res.render('register');
});
router.post('/', (req, res) => {

  var insertSql = 'insert into qy2(Name,password,confirm_password,Email) values(?,?,?,?)';
  connection.query(insertSql, [req.body.Name,req.body.password,req.body.confirm_password,req.body.Email], function (err, result, fields) {
  
      if (err) {
          console.log('err', err);
          return;
      } else {
         
          res.redirect('/');
      }
  });
  });


/*router.post('/',(req,res)=>{
    //获取前端传递参数
    //req.body.Name;
    //req.body.password;
    //req.body.confirm_password;
    //req.body.Email;
    //放入对象
    let user = new User(req.body.Name,req.body.password,req.body.confirm_password,req.body.Email);
    console.log(user);
    //存入session
    req.session.user=user;
    res.render('signin', { title: 'Express' });
})*/
module.exports=router;
