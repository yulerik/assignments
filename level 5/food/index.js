const express = require('express')

const uuid = require('uuid')
const app = express()
const port = process.env.PORT || 9023


const food = [
    {
        name: 'apple',
        type: 'fruit',
    },
    {
        name: 'pear',
        type: 'fruit',
    },
    {
        name: 'mango',
        type: 'fruit'
    },
    {
        name: 'broccoli',
        type: 'vegetable'
    },
    {
        name: 'cabbage',
        type: 'vegetable'
    },
    {
        name: 'cauliflower',
        type: 'vegetable'
    },
    {
        name: 'chicken',
        type: 'meat'
    },
    {
        name: 'wheat',
        type: 'grain'
    }
]

app.use(express.json())
app.use('/food', require('./middleware.js'))

app.get('/food', (req, res, next) => {
    console.log(req.body)
    const type = req.query.type
    const filtered = food.filter(each => each.type === type)
    if (type === undefined) {
        req.body.food = [...food]
        res.send(req.body)
    } else {
        req.body.food = [...filtered]
        res.send(req.body)
    }
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})