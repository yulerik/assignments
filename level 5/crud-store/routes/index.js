const express = require('express')
const indexRouter = express.Router()
const Inventory = require('../models/inventory')

indexRouter.route('/')
    .get((req, res, next) => {
        Inventory.find((error, inv) => {
            if (error) {
                res.status(500)
                return next(error)
            }
            return res.status(200).send(inv)
        })
    })
    
module.exports = indexRouter