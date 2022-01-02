const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 9009

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/inventory', () => console.log('mongodb connected'))

app.use('/', require('./routes/index'))
app.use('/inventory', require('./routes/inventory'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})