
 // 修改功能模块
router.get('/toUpdate/:id', function (req, res) {
    var Name = req.params.Name;
    console.log(Name)
    pool.getConnection(function (err, connection) {
        connection.query("select * from qy2 where Name=" + Name, function (err, rows) {
            console.log(rows)
            if (err) {
                res.end('修改页面跳转失败:' + err);
            } else {
                res.render('update', {datas: rows}); //直接跳转
            }
            connection.release();

        });
    });
});
router.post('/update', function (req, res) {
    var Name = req.body.Name;
    var Email = req.body.Email;
    var password=req.body.password;
    console.log(Name)
    console.log(Email)
    console.log(password)
    pool.getConnection(function (err, connection) {
        connection.query("update qy2 set Name='" + Name + "',Email='" + Email + "' ,password='" + password + "'where Name=" + Name, function (err, rows) {
            if (err) {
                res.end('修改失败:' + err);
            } else {
                res.redirect('/use');
            }
            connection.release();
        });
    });
});

