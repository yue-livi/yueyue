var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');
var session=require('express-session');
 


//连接数据库
// var mysql =require('mysql');
// var connection =mysql.createConnection({
//   host:'lyp',
//   user:'root',
//   password:'root',
//   database:'hotte'
// })


var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var blogRouter=require('./routes/blog');
var destinationsRouter=require('./routes/destinations');
var listingRouter=require('./routes/listing');
var teamRouter=require('./routes/team');
var signinRouter=require('./routes/signin');
var registerRouter=require('./routes/register');
var homeRouter=require('./routes/home');
var blankRouter=require('./routes/blank');

var basicRouter=require('./routes/basic');
//const{Cookie}=require('express-session');
// var addRouter=require('./routes/add');
// var useRouter=require('./routes/use');
// var updateRouter=require('./routes/update');


var app = express();
var identityKey='skey';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// app.set('views', path.join(__dirname, 'views'));
// // var template = require('art-template');
// // template.config('base','');
// // template.config('extname','.html');
// app.engine('.html',template.__express);
// app.set('view engine','html');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  name:identityKey,
  secret:"123",
  saveUninitialized:true,
  resave:false,
  cookie:{maxAge:1000 * 60 * 60 * 24}
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/about',aboutRouter);
app.use('/blog',blogRouter);
app.use('/destinations',destinationsRouter);
app.use('/listing',listingRouter);
app.use('/team',teamRouter);
app.use('/',signinRouter);
app.use('/home',homeRouter);
app.use('/basic',basicRouter);
app.use('/register',registerRouter);

app.use('/blank',blankRouter);


// catch 404 and forward to error handler
// app.use('/add',addRouter);
// app.use('/update',updateRouter);
// app.use('/use',useRouter);
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

    
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
