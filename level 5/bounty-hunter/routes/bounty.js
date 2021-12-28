const express = require('express')
const bounty = express.Router()
const uuid = require('uuid')

const bountyOne = {
    firstName: 'Qui-Gon',
    lastName: 'Jinn',
    living: false,
    bountyAmount: 32,
    type: 'jedi',
    id: '0b1862ef-4be8-4f2a-809f-fe8cb070269b'
}
const bountyTwo = {
    firstName: 'Darth',
    lastName: 'Vader',
    living: false,
    bountyAmount: 50,
    type: 'sith',
    id: '504270b8-b1f8-4120-a045-7c452711e1fe'
}
const bounties = [bountyOne, bountyTwo]

bounty.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        req.body.id = uuid.v4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounties array`)
    })
bounty.route('/:bountyId')
    .get((req, res) => {
        const filtered = bounties.find(found => found.id === req.params.bountyId)
        res.send(filtered)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(index => index.id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty`)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const newBountyObject = req.body
        const bountyIndex = bounties.findIndex(index => index.id === bountyId)
        // replaces values that are different from the stored bounty with the new bounty values, ie updates anything new.
        const updateBounty = Object.assign(bounties[bountyIndex], newBountyObject)
        res.send(updateBounty)

    })

module.exports = bounty