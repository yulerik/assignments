const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: String
})

module.exports = mongoose.model('Inventory', inventorySchema)