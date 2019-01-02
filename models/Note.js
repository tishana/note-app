const mongoose = require('../db/connection')
const Schema = mongoose.Schema

//Note Model
const Note = new Schema({
    date: Date.now,
    title: String,
    text: 'String',
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Note', Note)