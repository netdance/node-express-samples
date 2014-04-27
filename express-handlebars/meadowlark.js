var express = require('express');
var http = require('http');

var app = express();

// create fortunes

var fortuneCookies = [
    'conquer your fears, before they conquer you',
    'rivers need springs',
    'you will have a pleasant surprise',
    'don\'t fear what you don\'t know',
    'brace yourself: it\'s going to be that kind of day',
    'keep it simple, smilely'
];

// set up handlebars view engine

var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


app.set('port',3000);

app.use(express.static(__dirname+'/public'));

//app.use(app.router);

app.get('/', function(req, res) {
        res.render('home');
});

app.get('/about', function(req, res) {
        var randFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)]
        res.render('about', {fortune: randFortune});
});

//custom 404 page
app.use(function(req,res,next){
    res.status(404);
    res.render('404');
});

http.createServer(app).listen(app.get('port'),
    function(){
        console.log('Express started on localhost:'+app.get('port')+'; press ctl-C to terminate');
    }
);