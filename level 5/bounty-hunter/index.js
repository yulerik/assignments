const express = require('express')
const res = require('express/lib/response')
const uuid = require('uuid')
const app = express()
const port = process.env.PORT || 9000

app.use(express.json())

// bounty object- firstName: '', lastName: '', living: boolean, bountyAmount: num, type: 'sith/jedi', id: uuid num(unique num)
const bountyOne = {
    firstName: 'Qui-Gon',
    LastName: 'Jinn',
    living: false,
    bountyAmount: 32,
    type: 'jedi',
    id: uuid.v4()
}
const bountyTwo = {
    firstName: 'Darth',
    LastName: 'Vader',
    living: false,
    bountyAmount: 50,
    type: 'sith',
    id: uuid.v4()
}
const bounties = [bountyOne, bountyTwo]

app.use((req, res, next) => {
    next()
})

app.get('/bounty', (req, res, next) => {
    res.send(bounties)
})
app.post('/bounty', (req, res) => {
    const newBounty = req.body
    newBounty.id = uuid.v4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounty array.`)
})
app.get('/', (req, res) => {
    res.send('hello there')
})
// get bounty with a specific id
app.get('/bounty/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyFound = bounties.find(bounty => bounty.id === bountyId)
    res.send(bountyFound)
})



app.listen(9000, () => {
    console.log(`Running on ${port}`)
})