const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/note-app")
mongoose.Promise = Promise
mongoose.set('debug', true)
module.exports = mongoose

