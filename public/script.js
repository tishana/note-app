// const Backbone = require('backbone')
//Model
var Note = Backbone.Model.extend({
    defaults: {
        date: Date.now,
        title: " ",
        text: " "
    },
    initialize: () => {
        console.log("Note model initialized...")
    }
})
// var m = new Note({
//     title: "First Note",
//     text: "lorem Ipsum, blah blah blah..."
// })


//Collection
const NotesCollection = Backbone.Collection.extend({
    model: Note,
})

// var notes = new NotesCollection()

//View
var NoteView = Backbone.View.extend({
    //<div class="note-one" id="unique"></div>
    tagname: "div",
    className: "note-one",
    id: "unique",
    initialize: () => {
        console.log(this.tagname)
        // console.log($el)
        // $(".note-one").append(this.el)
    }
})





$(document).ready(() => {
    var oneView = new NoteView()
})