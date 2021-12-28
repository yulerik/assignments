const express = require('express')
const app = express()
const port = process.env.PORT || 9001

app.use(express.json())
app.use('/todos', require('./routes/todos'))

app.listen(port, () => {
    console.log(`running on ${port}`)
})

