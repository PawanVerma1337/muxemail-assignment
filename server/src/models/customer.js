const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    address: String,
    store: mongoose.SchemaTypes.ObjectId,
    fields: Object,
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer
