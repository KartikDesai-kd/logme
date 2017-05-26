require( './model/db' );
require('./model/db_Activities');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongooseActivity = require('mongoose');
var NewUser=require('./model/db');
var NewActivity=require('./model/db_Activities');
//Routes
var index = require('./routes/index');
var user = require('./routes/user');
var activity = require('./routes/activities');
var port = 3000;
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
console.log("dir path: "+__dirname);
app.use(express.static(path.join('../', 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Database connection
var db="mongodb://localhost/User";
mongoose.connect(db);

var dbActivity="mongodb://localhost/Activity";
mongooseActivity.connect(dbActivity);

//set routes
app.use('/', index);
app.use('/api', user);
app.use('/apiactivity', activity);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
