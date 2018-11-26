var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },
    (e) => {
        res.status(400).send(e);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = {app};