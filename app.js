var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shaker600Router = require('./routes/shaker-600');
var shakerGoRouter = require('./routes/shaker-go');
var doubleShakerRouter = require('./routes/double-shaker');
var doubleShakerGoRouter = require('./routes/double-shaker-go');
var galaoRouter = require('./routes/galao');
var portaCapsulasRouter = require('./routes/porta-capsulas');
var portaSemanalRouter = require('./routes/porta-semanal');
var copoAcqua = require('./routes/copo-acqua');
var copoTwister = require('./routes/copo-twister');

var app = express();

// Middleware to read products.json and attach it to res.locals
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'data', 'products.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the products.json file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.locals.products = JSON.parse(data);
    next();
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shaker-600', shaker600Router);
app.use('/shaker-go', shakerGoRouter);
app.use('/double-shaker', doubleShakerRouter);
app.use('/double-shaker-go', doubleShakerGoRouter);
app.use('/galao', galaoRouter);
app.use('/porta-capsulas', portaCapsulasRouter);
app.use('/porta-semanal', portaSemanalRouter);
app.use('/copo-twister', copoTwister);
app.use('/copo-acqua', copoAcqua);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
