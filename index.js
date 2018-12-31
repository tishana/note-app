const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const User = require('./models/User')
const Note = require('./models/Note')

const app = express()

app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})