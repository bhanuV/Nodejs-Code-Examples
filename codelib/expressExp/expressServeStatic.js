/* Express version 4.14.0 */
/* Express Serve static files */


var express = require('express');
var app = express();
var path = require('path');
/* It finds the index.html file in the public folder in the current directory
   if any and serves it */

app.use(express.static(path.join(__dirname, 'public')));

/* We can serve more than one folder, express will find the index.html file
   to serve the folder with the prefix attached to the path.
   The server serves the folder based on the the order mentioned*/

app.use('/resources', express.static(path.join(__dirname, 'gifs')));

app.listen(3000, function() {
  console.log('Express is listening on port 3000');
})
 
