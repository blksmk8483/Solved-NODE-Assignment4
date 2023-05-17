const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'User' });
});

app.post('/add-user', (req, res, next) => {
    users.push();
    res.redirect('/users');
});

app.listen(3000);