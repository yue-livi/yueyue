/* GET users listing. */
// 查询列表页
router.get('/', function(req, res, next) {
  pool.getConnection(function (err, connection) {
      connection.query(userSQL.getUserInfo, function (err, rows) {
          if (err) {
              res.render('user', {title:'Express',datas:[]}); // this renders "views/user.html"
          } else {
              res.render('user', {title:'Express',datas:rows});
          }
          connection.release();
      });
  });
});
// 新增页面跳转
router.get('/add',function (req, res) {
  res.render('add')
});
router.post('/add', function (req, res) {
 var name = req.body.name;
 var age = req.body.age;
  pool.getConnection(function (err, connection) {
      connection.query(userSQL.insertUserInfo, [name,age], function (err, rows) {
          if (err) {
              res.end('新增失败:' + err);
          } else {
              res.redirect('/user');
          }
          connection.release();

      });
  });
});
// 删
router.get('/del/:id', function (req, res) {
var id = req.params.id;
 pool.getConnection(function (err, connection) {
   connection.query("delete from userInfo where id=" + id, function (err, rows) {
     if (err) {
       res.end('删除失败:' + err);
     } else {
       res.redirect('/user');
     }
     connection.release();

   });
 });

});

// 查询
router.post('/search',function (req, res) {
var name = req.body.s_name;
var age = req.body.s_age;
var sql = "select * from userInfo";
if (name) {
  sql += " and name='" + name + "' ";
}
if (age) {
  sql += " and age=" + age + " ";
}
sql = sql.replace("and","where");
 pool.getConnection(function (err, connection) {
   connection.query(sql, function (err, rows) {
     if (err) {
       res.end("查询失败：", err)
     } else {
       res.render("user", {title: 'Express', datas: rows, s_name: name, s_age: age});
     }
     connection.release();
   });
 });
});



