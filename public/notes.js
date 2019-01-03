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

//View samples
// const NoteView = Backbone.View.extend({ // one note
//     model: new Note(),
//     tagName: 'div',
//     id: 'note-one',
//     // noteTpl: _.template('notes-one'),
//     initialize: () => {
//         // this.template = _.template($('#note-one').html())
//         console.log(this.el)
//         console.log(this.$el)
//         $('note-one').append(this.el)
//     },
//     events: {
//         // 'click .new-note': 
//     },
//     render: () => {
//         this.$el.html(this.template(this.model.toJSON()))
//         this.input = this.$('.edit')
//         return this
//     }
// })
// console.log(noteView.el)

// const NotesView = Backbone.View.extend({ //all notes
//     model: notes,
//     el: $('#notes-all'),
//     initialize: () => {
//         this.model.on('add', this.render(), this)
//     },
//     render: () => {
//         var self = this
//         this.$el.html('')
//         _.each(this.model.toArray(), (note) => {
//             self.$el.append(new NoteView({ model: note })).render().$el
//         })
//         return this
//     }
// })

//HTML stuff
/* <h4>date</h4>
    <h3><input class="title-input"></h3>
        <p><textarea name="text" class="text-input" cols="80" rows="10"></textarea></p> --></h3> */


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
