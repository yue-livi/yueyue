// 添加用户
router.get('/addUser',function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        // 建立连接 添加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function (err, result) {
            if(result) {
              result = {
                code: 200,
                msg: '添加成功'
              };
            }

            // 以json形式，把操作结果返回给前台页面
            responseJSON(res, result);

            // 释放链接
            connection.release();

        });
    });
});