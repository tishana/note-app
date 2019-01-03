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