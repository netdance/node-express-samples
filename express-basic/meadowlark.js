var express = require('express');
var http = require('http');

var app = express();

app.set('port',3000);

//app.use(app.router);

app.get('/', function(req, res) {
        res.type('text/plain');
        res.send('Meadowlark Travel');
});

app.get('/about', function(req, res) {
        res.type('text/plain');
        res.send('About Meadowlark Travel');
});

//custom 404 page
app.use(function(req,res,next){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

http.createServer(app).listen(app.get('port'),
    function(){
        console.log('Express started on localhost:'+app.get('port')+'; press ctl-C to terminate');
    }
);