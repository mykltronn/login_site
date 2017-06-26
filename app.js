const express = require('express'); //
const parseurl = require('parseurl');
const bodyParser = require('body-parser'); //
const session = require('express-session'); //
const mustacheExpress = require('mustache-express'); //
const validator = require('express-validator') //

const data = require('./data.js');
const app = express();

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true
}))
