const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const products = [
        {name: "iphone 13", role: "con stock"},
        {name: "iphone 10", role: "con stock"},
        {name: "samsung s20", role: "sin stock"}
    ]

    const product = products[Math.floor(Math.random() * products.length)]
    res.render('products', {object: product, role: product.role === 'con stock'})
    }
)

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts')
})

module.exports = router