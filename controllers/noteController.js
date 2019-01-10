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



router.post('/', (req, res) => { //creating a note from form
    let x = new Date()
    let newDate = x.toDateString('en-US')
    Note.create({
        title: req.body.title,
        date: newDate,
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


router.put('/:id', (req, res) => { //updating a note from the form
    Note.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(note => {
            res.json(note);
        }
        );
})

router.delete('/:id', (req, res) => { //deleting a note
    Note.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            return "deleted note"
            // console.log("deleted")
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router

