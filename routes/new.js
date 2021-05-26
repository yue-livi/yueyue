const { json } = require('express');
var express = require('express');
var router = express.Router();
var path = require('path');
let data = new Array();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "qiuyue"
});


router.get('/',(req,res) => {
   connection.query("select * from qy2 order by Name ",function(err,results){
     var datastring = JSON.stringify(results);
    var data = JSON.parse(datastring);
    res.render('new',{
      "detail":data
    });
  })
});

router.get('/addpage',(req,res) =>{
  res.render('add',{obj:{},Name:""});
});
module.exports = router;
// const { json } = require('express');
// var express = require('express');
// var router = express.Router();
// var fs = require('fs');
// var path = require('path');
// let data = new Array();
// fs.readFile(path.join(__dirname + "/bean/s.json"),{encoding:"utf-8"},(err,d) => {
//   data = JSON.parse(d);
// })

// router.get('/',(req,res) => {
//    let newData = data.splice(0,3);
//     res.render('new',{
//       detail:newData
//     });
// });

// router.get('/addpage',(req,res) =>{
//   res.render('add',{obj:{},id:""});
// });

// router.post('/add',(req,res) => {
//   let obj = {
//     name:req.body.user,
//     s1:req.body.s1,
//     s2:req.body.s3,
//     s3:req.body.s3,
//     amount:parseInt(req.body.s1)+parseInt(req.body.s2)+parseInt(req.body.s3)
//   };
//   if(req.body.Name != undefined && req.body.Name != ""){
//     data[req.body.Name] = obj;
//   }else{
//     data.unshift(obj)
//   }
//   res.redirect('/new')
// });

// router.get('/del/:Name',(req,res) => {
//   delete data[req.params.Name];
//   res.redirect('/new');
// });

// router.get('/update/:Name',(req,res) => {
//   res.render("add",{
//     obj:data[req.params.Name],
//     id:req.params.Name
//   })
// });
// router.post("/nextpage",(req,res)=>{
//   res.json(data);
// })

// module.exports = router;
