const mongoose = require('../db/connection')
const Schema = mongoose.Schema

//Note Model
const Note = new Schema({
    date: Date,
    title: String,
    text: String

})

module.exports = mongoose.model('Note', Note)