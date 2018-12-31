const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/note-app", { useNewUrlParser: true })

mongoose.Promise = Promise
mongoose.set('debug', true)
module.exports = mongoose

