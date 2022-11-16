const express = require('express');
const corss = require('corss');
const app = express();
app.use(corss());

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hellow Ashok');
});

app.get('/products', (req, res) => {
    let product = {
        'name': 'product 1',
        'id': 'P00021'
    };
    res.send(product);
});

app.listen(port, ()=> {
    console.log(`Node Express Application started ${port}`);
});