var express = require('express');
var router = express.Router();
var db=require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query("select * from tab_work",(err,result)=>{
        res.render('admin', { data:result});
      });
});
router.post('/',(req,res)=>{
    db.queryParam("select * from tab_work where title=?",[req.body.search,req.body.search],(err,result)=>{
        res.render('admin', { data:result});
      });
})


router.get('/add',(req,res)=>{
    res.render('add');
});
router.post('/add',(req,res)=>{
    db.queryParam("insert into tab_work(title)value(?)",[req.body.title],(err,result)=>{
        res.redirect('/admin');
    })
});
router.get('/update/:id',(req,res)=>{
    db.queryParam("select * from tab_work where id=?",[req.params.id],(err,result)=>{
        res.render('update',{obj:result[0]});
    })
});
router.post('/update',(req,res)=>{
    db.queryParam("update tab_work set title=? where id=?",[req.body.title,req.body.id],(err,result)=>{
        res.redirect('/admin');
    })
})


module.exports = router;