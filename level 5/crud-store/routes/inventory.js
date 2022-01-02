const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

inventoryRouter.route('/')
    .get((req, res, next) => {
        Inventory.find((error, inventory) => {
            if (error) {
                res.status(500)
                return next(error)
            }
            return res.status(200).send(inventory)
        })
    })
    .post((req, res, next) => {
        const newInv = new Inventory (req.body)
        newInv.save(err => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(newInv)
        })
    })
inventoryRouter.route('/:invId')
    .get((req, res, next) => {
        Inventory.findById(req.params.invId, (error, inventory) => {
            if (error) {
                res.status(500)
                return next(error)
            }
            return res.status(200).send(inventory)
        })
    })
    .put((req, res, next) => {
        Inventory.findByIdAndUpdate(
            req.params.invId,
            req.body,
            {new:true},
            (err, inventory) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.send(inventory)
            }
        )
    })
    .delete((req, res, next) => {
        Inventory.findByIdAndRemove(req.params.invId, (error, inventory) => {
            if (error) {
                res.status(500)
                return next(error)
            }
            const response = {
                message: 'inventory item successfully deleted'
            }
            return res.status(200).send(response)
        })
    })

module.exports = inventoryRouter