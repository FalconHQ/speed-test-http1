const express = require('express');
const https = require('https')
const fs = require('fs')
const path = require('path')
const debug = require('debug') ('h1_server')

const app = express();
const PORT = 8080;

app.use(express.static("."))

https.createServer({
    key: fs.readFileSync('./certificate/key.pem'),
    cert: fs.readFileSync('./certificate/cert.pem')
}, app)

.listen(PORT, (err) => {   
    if(err) {
    debug(`error!!!!!!!:${err}`)
        throw new Error(err)
    }
    debug(`listening at localhost:${PORT}`)
})