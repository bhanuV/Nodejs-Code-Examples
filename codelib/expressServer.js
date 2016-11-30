// Express Server 

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000)
   .get('/', function(req, res){
   	   res.send('Hello Express');
   })
   .listen(app.get('port'), function(){
   	   console.log('Express is listening on port ', app.get('port'));
   });