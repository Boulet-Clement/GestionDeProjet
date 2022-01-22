const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const commandesRouter = require('./routes/commandes');
const fleursRouter = require('./routes/fleurs');

const app = express();
const port = 4444

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/commandes', commandesRouter);
app.use('/fleurs', fleursRouter);

app.listen(port, ()=> {
    console.log(`Serveur is listening at localhost:${port}`)
})

module.exports = app;
