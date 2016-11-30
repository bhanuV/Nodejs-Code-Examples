/* Express Body parser */
/* Express version (4.14.0) */
/* body-parser version 1.15.1 */

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// parse a JSON
app.use(bodyParser.json());

/* When extended set to true, then deflated (compressed) bodies will be inflated;
   when extended set to false, deflated bodies are rejected. Defaults to true. */

app.use(bodyParser.urlencoded({ 
	extended : false 
}));

/************* parse an HTML body into string *********** 
app.use(bodyParser.text({ type : 'text/html'}s));
*********************************************************/

/************* parses all bodies as a Buffer ************
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
*********************************************************/

app.post('/json', function(req, res){
	var requestBody = req.body;
	res.send({
    data: requestBody,
    message: 'This is Request Body'
  });
});

app.listen('3000', function(){
	console.log('Express is listening to port 3000');
});