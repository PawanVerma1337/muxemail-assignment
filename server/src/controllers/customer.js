const Customer = require('../models/customer')

module.exports = {
    getCustomer: async function (req, res, next) {
        try {
            const customers = await Customer.find()
            res.status(200)
            res.json(customers)
        } catch (error) {
            next(error)
        }
    },
    getCustomerById: async function (req, res, next) {
        try {
            const id = req.params.id
            const customer = await Customer.find({ store: id })
            res.status(200)
            res.json(customer)
        } catch (error) {
            next(error)
        }
    },
    postCustomer: async function (req, res, next) {
        try {
            const { name, email, mobile, address, store, fields } = req.body

            const customer = new Customer({
                name,
                email,
                mobile,
                address,
                store,
                fields,
            })
            await customer.save()
            res.status(200)
            res.end()
        } catch (error) {
            next(error)
        }
    },
    deleteCustomerById: async function (req, res, next) {
        try {
            const id = req.params.id
            await Customer.deleteById(id)
            res.status(200)
            res.end()
        } catch (error) {
            next(error)
        }
    },
    updateCustomerById: async function (req, res, next) {
        try {
            const id = req.params.id
            const update = req.body
            await Customer.findByIdAndUpdate(id, update)
            res.status(200)
            res.end()
        } catch (error) {
            next(error)
        }
    },
}
