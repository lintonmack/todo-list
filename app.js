var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

require('./controllers/toDoController.js')(app)

app.listen(3000)