// const Backbone = require('backbone')
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
    model: Note,
    // localStorage: new StorageEvent('notes')
})

var notes = new NotesCollection()



//View
const NoteView = Backbone.View.extend({ // one note
    model: new Note(),
    tagName: 'div',
    // noteTpl: _.template('notes-one'),
    initialize: () => {
        this.template = _.template($('#note-one').html())
    },
    events: {
        // 'click .new-note': 
    },
    render: () => {
        this.$el.html(this.template(this.model.toJSON()))
        this.input = this.$('.edit')
        return this
    }
})
var oneNote = new NoteView()
// console.log(noteView.el)

const NotesView = Backbone.View.extend({ //all notes
    model: notes,
    el: $('#notes-all'),
    initialize: () => {
        this.model.on('add', this.render(), this)
    },
    render: () => {
        var self = this
        this.$el.html('')
        _.each(this.model.toArray(), (note) => {
            self.$el.append(new NoteView({ model: note })).render().$el
        })
        return this
    }
})
var allNotes = new NotesView()

$(document).ready(() => {
    $('add-note').on('click', () => {
        var note = new Note({
            date: Date.now,
            title: $('.title-input').val(),
            text: $('.text-input').val()
        })
    })
})