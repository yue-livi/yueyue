// 新增页面跳转
router.get('/add',function (req, res) {
    res.render('add')
});
router.post('/add', function (req, res) {
   var Name = req.body.Name;
   var Email = req.body.Email;
   var password=req.body.password;
    pool.getConnection(function (err, connection) {
        connection.query(Users.insertqy2, [Name,Email,password], function (err, rows) {
            if (err) {
                res.end('新增失败:' + err);
            } else {
                res.redirect('/use');
            }
            connection.release();

        });
    });
});
