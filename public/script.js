// const Backbone = require('backbone')
//Model
var Note = Backbone.Model.extend({
    defaults: {
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
    // //<div class="note-one" id="unique"></div>
    tagname: "div",
    className: "note-one",
    id: "unique",
    initialize: () => {
        $("#notes").append("NOTE")
    }

})

var TestView = Backbone.View.extend({
    tagName: "div",
    className: "prettycake",
    id: "divman",
    initialize: () => {
        $("#notes").append("bang")
    },
    render: () => {
        var template = _.template($("#note-one").html(), {})
        this.$el.html(template)
    }
})


$(document).ready(() => {
    var x = new TestView({ el: $("#notes") })
    console.log(x)
})