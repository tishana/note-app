const Note = require('../models/Note')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => { //show all notes
    Note.find({})
        .then((notes) => {
            res.json(notes)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/new', (req, res) => { //rendering the form to create a new note
    res.render('note/new')
})

router.post('/', (req, res) => { //creating a note from form
    Note.create({
        date: req.body.date,
        title: req.body.title,
        text: req.body.text
    }).then(note => {
        res.json(note)
    }).catch(err => {
        console.log(err)
    })
})

router.get('/:id', (req, res) => { //showing one note
    Note.findById(req.params.id)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/:id/edit', (req, res) => { //rendering the form to edit a note
    Note.findOne({ _id: req.params.id })
        .then(note => {
            res.render('/notes/edit', note)
        })
})

router.put('/:id', (req, res) => { //updating a note from the form
    Note.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(note => {
            res.redirect("/");
        }
        );
})

router.delete('/:id', (req, res) => { //deleting a note
    Note.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/')
        })
})

module.exports = router

