const express = require('express')
const fs = require('fs')

const app = express()
app.all('/', (req, res) => {
    var html = fs.readFileSync(__dirname + '/index.html');
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', aasa.size);
    res.status(200).send(html);
})

app.get('/app', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send("Download app");
})

var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
app.get('/apple-app-site-association', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.set('Content-Length', aasa.size);
    res.status(200).send(aasa);
});

app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000)
