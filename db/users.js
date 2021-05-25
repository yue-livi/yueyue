var Use = {
    insert: 'INSERT INTO qy2(Name,Email,password) VALUES(?,?,?)', // 插入数据
    drop: 'DROP TABLE qy2', // 删除表中所有的数据
    queryAll: 'SELECT * FROM qy2', // 查找表中所有数据
    getUserById: 'SELECT * FROM qy2 WHERE Name =?', // 查找符合条件的数据
};
module.exports = Use;

