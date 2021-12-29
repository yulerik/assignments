const express = require('express')
const homeInfo = express.Router()

homeInfo.route('/')
    .get((req, res) => {
        console.log('route to /bounty for bounty list')
        res.send('add endpoint /bounty to url parameter')
    })

module.exports = homeInfo