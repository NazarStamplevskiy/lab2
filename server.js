const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, 'static/views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.render('pages/index', {title: 'Home'});
})

app.get('/train', function (request, response) {
    response.render('pages/train', {title: 'Train'});
})

app.get('/passenger', function (request, response) {
    response.render('pages/passenger', {title: 'Passenger'});
})

app.get('/ticket', function (request, response) {
    response.render('pages/ticket', {title: 'Ticket'});
})

app.get('/soldTicket', function (request, response) {
    response.render('pages/soldTicket', {title: 'Sold Ticket'});
})


app.listen(8000, ()=>{
    console.log(8000)
});