const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from my first ever server');
})

app.listen(port, () => {
    console.log(`my first server on running port: ${port}`)
})