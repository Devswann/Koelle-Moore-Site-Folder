const express   = require('express'),
    app         = express(),
    bodyparser  = require('body-parser'),
    port = 8001;

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use('/css', express.static(__dirname + '/css'));
app.use('image', express.static(__dirname + '/assets/images'));
app.use(express.static('./'));

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/portfolio', function(req, res) {
    res.render('portfolio')
})

app.get('/contact', function(req, res) {
    res.render('contact')
})

app.get('/blog', function(req, res) {
    res.render('blog')
})

app.listen(port, function(){
    console.log('Server Running on ' + port)
})