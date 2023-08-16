const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const products = [
        {name: "iphone 13", price: 1500},
        {name: "iphone 10", price: 500},
        {name: "samsung s20", price: 800}
    ]

    res.render('home', { products })
    }
)

module.exports = router