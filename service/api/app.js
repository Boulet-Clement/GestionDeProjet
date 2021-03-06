const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const fleursRouter = require('./routes/fleurs');
const usersRouter = require('./routes/users');
const jeuRouter = require('./routes/jeu');

const app = express();
const port = 4444

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./vues"));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, './public')));


app.use('/', indexRouter);
app.use('/fleurs', fleursRouter);
app.use('/', usersRouter);
app.use('/jeu', jeuRouter);

app.listen(port, ()=> {
    console.log(`Serveur is listening at localhost:${port}`)
})

module.exports = app;
