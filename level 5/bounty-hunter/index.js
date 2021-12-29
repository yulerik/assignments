const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 9000


app.use(express.json())
app.use(morgan('dev'))
app.use('/', require('./routes/homeInfo'))
app.use('/bounty', require('./routes/bounty'))




app.listen(port, () => {
    console.log(`Running on ${port}`)
})