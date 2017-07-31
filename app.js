var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.render('home')
})

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}))

app.set('view engine', '.hbs')

app.use(express.static('public'))

require('./controllers/toDoController.js')(app)

app.listen(3000)