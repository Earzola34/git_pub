const express = require('express');

const app = express();

const drinks = require('./models/drinks');

const foods = require('./models/food');

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index', {drinks});
})

app.get('/drinks/:id', (req, res) => {
    let drink = drinks[req.params.id];
    res.render('drinks_show', {drink});
})

app.get('/foods', (req, res) => {
    res.render('food_index', {foods});
})

app.get('/foods/:id', (req, res) => {
    let food = foods[req.params.id];
    res.render('food_show', {food});
})

app.listen (PORT, () => {
    console.log('listening on port 3000');
});

