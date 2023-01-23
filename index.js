const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const Note = require('./models/Note')
const seeds = require('./db/seedData.json')

const db = mongoose.connection

const noteController = require('./controllers/noteController')
//Enviironmental Variables
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001
// Connect to MongoDB
mongoose.connect(mongoURI,
    () => console.log(' MongoDB connection established'))


// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())

// Routes
app.use('/api/notes', noteController)

// app.set('port', process.env.PORT || 3001)

// Seeding the db
app.get('/seed', async (req, res) => {
    await Note.deleteMany({});
    await Note.insertMany(seeds);
    res.send('done!');
});

app.listen(PORT, () => {
    console.log('✅ Alive and kicking on', PORT)
})


// }) mongodb://muppet:Cupc@ke19@ds149034.mlab.com:49034/jot