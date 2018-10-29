const axios = require('axios');
var express = require('express')
var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send('Hello World')
})


app.post('/message', (req, res) => {
    let { destination, body } = req.body
    axios.post('http://messageapp:3000/message', { destination, body })
        .then(() => {
            res.status(200).send('Succesful');
        })
        .catch((err) => {

            console.log(typeof err);
            res.status(500).send('error');
        
        })
})


app.listen(9001)