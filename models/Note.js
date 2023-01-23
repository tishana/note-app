const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('strictQuery', true)

//Note Model - remember to change to add correct date format
const Note = new Schema({
    date: String,
    title: String,
    text: String

})

module.exports = mongoose.model('Note', Note)