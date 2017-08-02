var mongoose = require('mongoose')

var toDoSchema = mongoose.Schema({
    task: String
})

var ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo