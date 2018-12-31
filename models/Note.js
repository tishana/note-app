const mongoose = require('../db/connection')
const Schema = mongoose.Schema
//Note Schema

module.exports = mongoose.model('Note', Note)