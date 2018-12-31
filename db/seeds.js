// some sample notes for the API
const mongoose = require('./connection')
const seeds = require('./seedData.json')
const Note = require('../models/Note')
mongoose.Promise = Promise

Note.remove({})
    .then(() => {
        return Note.collection.insert(seeds)
    })
    .then(() => {
        process.exit()
    })