const express = require('express');
const app = express();

/**
 * 	Import our Routes
 **/
// Client Route Code
const index = require('../routes/client/index');

// Server & Client (Error) Route Code
const notFound = require('../routes/both/404.js');
const serviceUnavailable = require('../routes/both/500.js');



/**
 * 	Set URLS for our Routes
 **/
// Set Client Route URLS
app.use('/', index);

// Set Server & Client (Error) Route URLS
app.use('/500', serviceUnavailable);
app.use('*', notFound); // Always keep as last route


module.exports = app;
