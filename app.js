require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieSession = require("cookie-session");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require("./validation/passport");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require("./routes/authRoutes");
const uploadRouter = require("./routes/uploadRoutes");
const profileRouter = require("./routes/profileRoutes");
const postRouter = require("./routes/postRoutes");

var app = express();

app.use(
    cookieSession({
        maxAge: 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './client/build')));
app.use('/uploads', express.static(path.join(__dirname, './public/uploads')));

app.use('/auth', authRouter);
app.use('/api', uploadRouter);
app.use('/api', profileRouter);
app.use('/api', postRouter);
app.get('/api/user', (req, res) => res.json(req.user));
app.use('/users', usersRouter);
app.use('*', indexRouter);

module.exports = app;
