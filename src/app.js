var session = require('express-session')
const express = require('express');
var bodyParser = require('body-parser');
const config = require('./config/config');
const baseRoutes= require('./app.route')
const routes= require("./routes/routes")
const path = require('path');
const app = express();

app.use(session(config.session));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(baseRoutes);
app.use('/',routes)

module.exports = app;