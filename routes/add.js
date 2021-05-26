// // 新增页面跳转
// router.get('/add',function (req, res) {
//     res.render('add')
// });
// router.post('/add', function (req, res) {
//    var Name = req.body.Name;
//    var Email = req.body.Email;
//    var password=req.body.password;
//     pool.getConnection(function (err, connection) {
//         connection.query(Users.insertqy2, [Name,Email,password], function (err, rows) {
//             if (err) {
//                 res.end('新增失败:' + err);
//             } else {
//                 res.redirect('/use');
//             }
//             connection.release();

//         });
//     });
// });
let express = require ('express');
let router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "qiuyue"
});
connection.connect();

// router.get('/', function (req, res) {
//     res.render('add');
// });

router.get('/', function (req, res) {
    var selectSQL = "select * from qy2" 
      connection.query(selectSQL, function (err, results, fields){
        console.log(err);
        console.log(results);
        console.log(fields);
        res.render('add',{detail:results} );
      
        });
  });

router.post('/', (req, res) => {

    var insertSql = 'insert into qy2(Name,Email,password) values(?,?,?)';
    connection.query(insertSql, [req.body.Name,req.body.Email,req.body.password], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/new');
        }
    });
    });

module.exports = router;
