const { Router } = require('express')
const uploader = require('../utils/multer')

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'products'})
})

router.get('/:id', (req, res) => {
    res.json({ message: `product ${req.params.id}`})
})

router.post('/', uploader.single('file'), (req, res) => {
    res.json({ message: `name: ${req.body.name}, breed: ${req.body.breed}` })
})

router.put('/:id', (req, res) => {
    res.json({ message: 'update product'})
})

router.delete('/:id', (req, res) => {
    res.json({ message: `delete product ${req.params.id}`})
})

module.exports = router