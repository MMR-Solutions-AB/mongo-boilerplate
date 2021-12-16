const mongoose = require('mongoose');

// Import .env file values into variable 'process.env'
require('dotenv').config();

// Import Express and initialize Express Server Application
const express = require('express');
const app = express();

// Import Express Handlebars for rendering HTML with {{brackets}}
app.use(require('./express-handlebars'));

// Make all files in the /public folder accessible to everyone, 
// so that we can show images in the browser for example
app.use('../public', express.static('public'));


app.use(require('./routes'));


mongoose.connect('mongodb+srv://admin:admin@cluster0.sk0f3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then((connection)=>{
	console.log('Database connection successful!')
}).catch((err)=>{
	console.error('Database connection failed: ', err)
});


/**
 * 	Start Express Server Application
 **/
app.listen(process.env.PORT, function () {
	console.log(`App listening on port ${process.env.PORT}`);
});

module.exports = app;
