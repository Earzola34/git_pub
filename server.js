const express = require('express');

const drinks = require('./models/drinks')

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks});
});

app.get('/drinks/:id', (req, res) => {
    let drink = drinks[req.params.id];
    res.render('drinks_show.ejs', {drink});
});

app.listen (PORT, () => {
    console.log('listening on port 3000');
});

