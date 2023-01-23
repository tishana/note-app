const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection

const noteController = require('./controllers/noteController')
//Enviironmental Variables
const app = express()
const mongoURI = process.env.MONGODB_URI
const port = process.env.PORT || 3001

app.use(parser.urlencoded({ extended: true }))

app.use(parser.json())
app.use(cors())

app.use('/api/notes', noteController)

app.set('port', process.env.PORT || 3001)

app.listen(PORT, () => {
    console.log(`✅ Alive and kicking on ${PORT}  🌟`)
})


// }) mongodb://muppet:Cupc@ke19@ds149034.mlab.com:49034/jot