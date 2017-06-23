var express = require('express');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');
var expressSession = require ('express-session');

var app = express();

app.use(express.static('public'));

app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoder({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


// *********** ^ ^ set up ^ ^ ************



app.get('/', function(req, res){
  res.send('All set up')
});



app.post('/', function(req, res){

});




// *********** v v listen v v ************

app.listen(8080, function(){
  console.log("You're good to go!")
});
