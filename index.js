const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();
mongoose.connect('mongodb://localhost/employeedb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// initialize routes
app.use('/api', require('./routes/routes-api'));

// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err); // to see properties of message in our console
    res.status(422).send({ error: err.message });
});
// listen for requests
app.listen(4000, function () {
    console.log('now listening for requests');
});
