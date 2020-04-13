var http = require('http');


var server =  http.createServer( function(req,res){
    var categoria = req.url;
   if(categoria == '/tecnologia'){
    res.end('<html><body>Portal de bem doidinho</body></html> ')
   }else{
    res.end('<html><body>Portal de teste</body></html> ')
   }

});

server.listen(8181);