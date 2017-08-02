// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT =7500;
var PORT2=7000;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("damn girl you look fine");
}

function handleRequest2(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("you're literally dumb, fu");
}


// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest2);
// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

});
