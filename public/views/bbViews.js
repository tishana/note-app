//View
const NoteView = Backbone.View.extend({ // one note
    model: new Note(),
    tagName: 'div',
    // noteTpl: _.template('notes-one'),
    initialize: () => {
        this.template = _.template($('.notes-one').html())
    },
    events: {

    },
    render: () => {
        this.$el.html(this.template(this.model.toJSON()))
        this.input = this.$('.edit')
        return this
    }
})
// var noteView = new NoteView()
// console.log(noteView.el)

const NotesView = Backbone.View.extend({ //all notes
    model: notes,
    el: $('.notes-all'),
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