var http = require('http');

function handler(request, response){
    response.end("{'message':'hello Connor!'}");
}

http.createServer(handler).listen(8080, function(){
    console.log("Service is running...");
});
