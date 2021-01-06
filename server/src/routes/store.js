const router = require('express').Router()
const {
    getStore,
    getStoreById,
    postStore,
    getFields,
    postFields,
} = require('../controllers/store')

router.get('/', getStore)
router.get('/:id', getStoreById)
router.post('/', postStore)
router.get('/:id/fields', getFields)
router.post('/:id/fields', postFields)

module.exports = router
