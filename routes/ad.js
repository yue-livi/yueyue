let express = require ('express');
let router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "oo"
});
connection.connect();

// router.get('/', function (req, res) {
//     res.render('add');
// });

router.get('/', function (req, res) {
    var selectSQL = "select * from tab_w" 
      connection.query(selectSQL, function (err, results, fields){
        console.log(err);
        console.log(results);
        console.log(fields);
        res.render('ad',{detail:results} );
      
        });
  });

router.post('/', (req, res) => {

    var insertSql = 'insert into tab_w(username,phone,book_time) values(?,?,?)';
    connection.query(insertSql, [req.body.username,req.body.phone,req.body.book_time], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/basic');
        }
    });
    });

module.exports = router;