function toDoController (app) {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })
}

module.exports = toDoController