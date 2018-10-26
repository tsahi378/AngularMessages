//https://timmyomahony.com/#recent-projects
//http://www.adhamdannaway.com/
//http://ejosue.com/contact/
//https://codeburst.io/10-awesome-web-developer-portfolios-d266b32e6154

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');

var app = express();
mongoose.connect('mongodb://Prabhakar10:prabhuPRABHU_1990@ds121950.mlab.com:21950/prabhakarportfolio');
//mongoose.connect('localhost:27017/prabhakarportfolio');
//mongoose.connect('localhost:27017/prabhakarportfolio', { useMongoClient: true })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon01.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use('/message', messageRoutes);
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
