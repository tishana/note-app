const mongoose = require('../db/connection')
const Schema = mongoose.Schema
mongoose.set('strictQuery', true)

//Note Model
const Note = new Schema({
    date: String,
    title: String,
    text: String

})

module.exports = mongoose.model('Note', Note)