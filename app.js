const express = require('express'); //
const parseurl = require('parseurl'); //
const bodyParser = require('body-parser'); //
const session = require('express-session'); //
const mustacheExpress = require('mustache-express'); //
const validator = require('express-validator') //

const data = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({ // generate session
  secret: 'password',
  resave: false,
  saveUninitialized: true
}));



console.log(data);





app.get('/', function(req, res){
  if(req.session && req.session.authenticated){
    res.render('comein.mustache', { username: username})
  }
  else {
    res.redirect('/login')
  }
});

app.get('/login', function(req, res){
  res.render('index')
  console.log(data);
});


function authenticate(req, username, password){
  var authenticated = data.users.find(function (user){
    if(username === user.username && password === user.password){
      req.session.authenticated = true;
    }
  })
}

app.post('/', function(req, res){
  var username = req.body.username; // utilize body-parser to grab form data
  var password = req.body.password;
  authenticate(req, username, password);
  if(req.session && req.session.authenticated){
    res.render('comein.mustache', { username: username})
  }
  else {
    res.redirect('/login')
  }

});

app.listen(3000, function(){
  console.log('GO NUTS!')
});
