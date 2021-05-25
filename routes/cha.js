// 查询
router.post('/search',function (req, res) {
    var Name = req.body.s_Name;
    var Eamil = req.body.s_Email;
    var password = req.body.s_password;
    var sql = "select * from qy2";
    if (Name) {
        sql += " and Name='" + Name + "' ";
    }
    if (Email) {
        sql += " and Email=" + Email + " ";
    }
    if (password) {
        sql += " and password=" + password + " ";
    }
    sql = sql.replace("and","where");
     pool.getConnection(function (err, connection) {
         connection.query(sql, function (err, rows) {
             if (err) {
                 res.end("查询失败：", err)
             } else {
                 res.render("use", {title: 'Express', datas: rows, s_Name: Name, s_Email: Eamil,s_password:password});
             }
             connection.release();
         });
     });
 });
 