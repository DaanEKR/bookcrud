const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config')

app.use(bodyParser.json());

//IMPORT ROUTES

const bookRoute = require('./routes/book');

app.use('/books', bookRoute);

app.get('/', (req, res) => {
    res.send('Homepage')
});

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true, useUnifiedTopology: true },
() =>
    	console.log('connected to database')
)

app.listen(8001);