/*** http plain server ***/

var http = require('http');

/*********** type 1 *************/

http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	res.end(JSON.stringify({'Message': 'Hello I am HTTP server'}));
}).listen(3001);

/********* type 2 *************************************************************

http.createServer((req, res) =>{
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	res.end(JSON.stringify({'Message': 'Hello I am HTTP server'}));
}).listen(3001);

******************************************************************************/