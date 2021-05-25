// 删
router.get('/del/:Name', function (req, res) {
    var Name = req.params.Name;
     pool.getConnection(function (err, connection) {
         connection.query("delete from qy2 where Name=" + Name, function (err, rows) {
             if (err) {
                 res.end('删除失败:' + err);
             } else {
                 res.redirect('/use');
             }
             connection.release();
 
         });
     });
 
 });
