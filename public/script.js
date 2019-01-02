//Model
var Note = Backbone.Model.extend({
    defaults: {
        date: Date.now,
        title: '',
        text: ''
    },
    initialize: () => {
        console.log('Note model initialized...')
    }
})



//Collection
const NotesCollection = Backbone.Collection.extend({
    model: Note
})



//View
const NoteView = Backbone.View.extend({ // one note
    model = new Note(),
    tagName = 'div',
    initialize: () => {
        this.template = _.template($())
    }
})

const NotesView = Backbone.View.extend({ //all notes

})

var m = new Note({
    title: "First Note",
    text: "lorem Ipsum, blah blah blah..."
})

console.log(m.toJSON())
var notes = new NotesCollection(m)
console.log('Collection size: ' + notes.length)
var p = new Note({
    title: 'Another One',
    text: 'Normally, when creating a collection you’ll also want to define a property specifying the type of model that your collection will contain, along with any instance properties required.'
})
notes.push(p)
console.log('Collection size: ' + notes.length)
console.log(notes.toJSON())