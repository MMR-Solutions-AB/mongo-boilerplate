const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const User = mongoose.model('User', new Schema({
    username: String,
    password: String, // Hashed password so that people cant steal it... 
    age: Number,
    gender: String, // Must be "other", "male" or "female"... 
    email: String,
}));

