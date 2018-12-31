const mongoose = require('../db/connection')
const Schema = mongoose.Schema
//User Schema

module.exports = mongoose.model('User', User)