// some sample notes for the API
const mongoose = require('./connection')
const seeds = require('./seedData.json')
const Note = require('../models/Note')
mongoose.Promise = Promise

Note.deleteMany({})
    .then(() => {
        return Note.collection.bulkWrite(seeds)
    })
    .then(() => {
        process.exit()
    })