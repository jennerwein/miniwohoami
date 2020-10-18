const express = require('express')
const colorbrightness = require('./colorbrightness.js');
const app = express()
const port = 8080

const os = require('os');
const ip = require('ip');
const internalIp = require('internal-ip');

console.log("miniwhoami starting at port 8080 ...");

bgcolor = '#' + (os.hostname() + 'ffffff').slice(0, 6)

// Set background color just for testing.
//bgcolor = '#cd0aee'

if (colorbrightness.helligkeit(bgcolor) > 130) {
  fgcolor = "#000000"
} else {
  fgcolor = "#ffffff"
}
counter = 0

// To use the Pug template engine
// https://expressjs.com/de/guide/using-template-engines.html
app.set('view engine', 'pug')

app.get('/', function (request, response) {
  counter = counter+1;
  response.render('index', { 
    hostname: os.hostname(), 
    // ipaddress: ip.address(),
    ipaddress: internalIp.v4.sync(),
    local_ipv6: internalIp.v6.sync(),
    bgcolor: bgcolor,
    fgcolor: fgcolor,
    counter: counter
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))