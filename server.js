var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var path = require('path'); 

app.use(bodyParser.urlencoded({ extended: true})); 
app.set('views', path.join(__dirname, './client/views')); 
app.set('view engine', 'ejs'); 

//________Models____________________
require('./server/config/mongoose.js');

//________Getting my routes______
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//______Port______________________
app.listen(8000, function(){
	console.log("listening on port 8000"); 
})


