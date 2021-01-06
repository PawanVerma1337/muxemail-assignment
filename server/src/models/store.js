const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    name: String,
    fields: {
        type: Array,
    },
})

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store
