const mongoose = require('../db/connection')
const Schema = mongoose.Schema

//User Schema
const User = new Schema({
    username: String,
    email: String,
    password: String
})


module.exports = mongoose.model('User', User)