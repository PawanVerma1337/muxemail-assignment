const router = require('express').Router()
const {
    getCustomer,
    getCustomerById,
    postCustomer,
    deleteCustomerById,
    updateCustomerById,
} = require('../controllers/customer')

router.get('/', getCustomer)
router.get('/:id', getCustomerById)
router.post('/', postCustomer)
router.delete('/:id', deleteCustomerById)
router.put('/:id', updateCustomerById)

module.exports = router
