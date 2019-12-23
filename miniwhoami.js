const express = require('express')
const app = express()
const port = 8080

const os = require('os');
const ip = require('ip');

console.log("miniwhoami starting at port 8080 ...");

// To use the Pug template engine
// https://expressjs.com/de/guide/using-template-engines.html
app.set('view engine', 'pug')

app.get('/', function (request, response) {
  response.render('index', { hostname: os.hostname(), ipaddress: ip.address()
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))