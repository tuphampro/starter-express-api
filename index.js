const express = require('express')
const fs = require('fs')

const app = express()
app.all('/', (req, res) => {
    var html = fs.readFileSync(__dirname + '/index.html');
    res.send(html)
})

var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
app.get('/apple-app-site-association', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.set('Content-Length', aasa.size);
    res.status(200).send(aasa);
});

app.listen(process.env.PORT || 3000)
