const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the index page
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/index', (req, res) => {
    res.render('index');
});
app.get('/account', (req, res) => {
    res.render('account');
});
// Define a route for the men_products page
app.get('/men_products', (req, res) => {
    res.render('men_products');
});
app.get('/women_products', (req, res) => {
    res.render('women_products');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Start the server
app.listen(port, () => {
    const serverURL = `http://localhost:${port}`;
    console.log(`Server running on ${serverURL}`);
});


