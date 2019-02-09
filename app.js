require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("./validation/passport");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require("./routes/authRoutes");

var app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './client/build')));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('*', indexRouter);

module.exports = app;
