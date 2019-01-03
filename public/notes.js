// If I wanna use just index.js and have all routes and models on one file:
// const User = require('./models/User')
// const Note = require('./models/Note')

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



//sample model, collection
// var m = new Note({
//     title: "First Note",
//     text: "lorem Ipsum, blah blah blah..."
// })

// console.log(m.toJSON())
// var notes = new NotesCollection(m)
// console.log('Collection size: ' + notes.length)
// var p = new Note({
//     title: 'Another One',
//     text: 'Normally, when creating a collection you’ll also want to define a property specifying the type of model that your collection will contain, along with any instance properties required.'
// })
// notes.push(p)
// console.log('Collection size: ' + notes.length)
// console.log(notes.toJSON())
