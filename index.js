const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const cors = require('cors')
// const User = require('./models/User')
// const Note = require('./models/Note')
const noteController = require('./controllers/noteController')

const app = express()

app.use(parser.urlencoded({ extended: true }))

app.use(parser.json())
app.use(cors())

app.use('/api/notes', noteController)

// app.get('api/notes', (req, res) => { // Notes API
//     Note.find()
//         .then((notes) => {
//             res.json(notes)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('api/notes/:id', (req, res) => {
//     Note.findById(req.params.id)
//         .then(note => {
//             res.json(order)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })

// app.post('/api/notes', (req, res) => {
//     Note.create({
//         date: req.body.date,
//         title: req.body.title,
//         text: req.body.text
//     }).then(note => {
//         res.json(note)
//     }).catch(err => {
//         console.log(err)
//     })
// })

// app.get('/api/notes/:id/edit', (req, res) => {
//     //render form to edit a note
// })

// app.put('/api/notes/:id', (req, res) => {
//     //update the note
// })

// app.delete('/api/notes/:id', (req, res) => {
//     //delete a note
// })

// router.get('/new', noteController.new)
// router.get('/:id', noteController.show)
// router.post('/', noteController.create)
// router.get('/:id/edit', noteController.edit)
// router.put('/:id', noteController.update)
// router.delete('/:id', noteController.delete)

app.listen(4000, () => {
    console.log('Alexa can hear you on port 4000')
})