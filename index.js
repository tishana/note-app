const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const cors = require('cors')
// const passport = require('passport')// for user auth in the future

const noteController = require('./controllers/noteController')

const app = express()

app.use(parser.urlencoded({ extended: true }))

app.use(parser.json())
app.use(cors())

app.use('/api/notes', noteController)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})


// }) mongodb://muppet:Cupc@ke19@ds149034.mlab.com:49034/jot