const express = require('express')
const middleware = express.Router()
const uuid = require('uuid')

middleware.use((req, res, next) => {
    console.log(req.body)
    console.log('middleware attached')
    req.body = { middleware: 'attached', sessionId: uuid.v4()}
    console.log(req.body)
    next()
})

module.exports = middleware