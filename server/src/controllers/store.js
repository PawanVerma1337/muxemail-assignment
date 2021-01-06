const Store = require('../models/store')

module.exports = {
    getStore: async function (req, res, next) {
        try {
            const stores = await Store.find()
            res.status(200)
            res.json(stores)
        } catch (error) {
            next(error)
        }
    },
    getStoreById: async function (req, res, next) {
        try {
            const id = req.params.id
            const store = await Store.findById(id)
            res.status(200)
            res.json(store)
        } catch (error) {
            next(error)
        }
    },
    postStore: async function (req, res, next) {
        try {
            const { name, fields } = req.body
            const store = new Store({ name, fields })
            await store.save()
            res.status(200)
            res.end()
        } catch (error) {
            next(error)
        }
    },
    getFields: async function (req, res, next) {
        try {
            const id = req.params.id
            const store = await Store.findById(id)
            res.status(200)
            res.json(store.fields)
        } catch (error) {
            next(error)
        }
    },
    postFields: async function (req, res, next) {
        try {
            const id = req.params.id
            const { fields } = req.body
            await Store.findByIdAndUpdate(id, {
                $set: { fields: fields },
            })
            res.status(200)
            res.end()
        } catch (error) {
            next(error)
        }
    },
}
