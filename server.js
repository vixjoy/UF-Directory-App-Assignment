var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);



  if(parsedUrl.path == '/listings' && request.method == 'GET')
  {
          //var obj = require ('./listing.json');
          //console.log(obj);
          response.write(listingData);
          response.end();
  }
  else
  {

          response.writeHead(404, {'Content-Type' : 'plain/text'});
          response.end('Bad gateway error');
  }
  };


  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.

    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
   try{
     var server = http.createServer(requestHandler);
     server.listen(port,function(){
       listingData = data;}
     );

   }catch(err){
     throw err;
   }

});
