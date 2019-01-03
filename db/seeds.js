// some sample notes for the API
const mongoose = require('./connection')
const seeds = require('./seedData.json')
const Note = require('../models/Note')
mongoose.Promise = Promise

Note.removeMany({})
    .then(() => {
        Note.collection.insertMany(seeds)
    })
    .then((seeds) => {
        console.log(seeds)
        process.exit()
    }).catch((err) => {
        console.log(err)
    })