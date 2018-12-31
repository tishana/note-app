const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/note-app")
mongoose.Promise = Promise
module.exports = mongoose