const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const cors = require('cors');

const brew_routes = require('./routes/brew.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, hostname, () => {
    console.log(`Server listens http://${hostname}:${port}`)
});
app.use('/api/brews', brew_routes);
