var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function(){
	console.log("YOU'RE ON PORT 8000 BITCH!");
});