const express = require('express')
const products = require('./files/fileProducts.json')

const port = 3000
const app = express()

app.get('/products', (req, res) => {
    const { limit } = req.query
    if (limit) {
        const productsFilter = products.slice(0, limit || products)
        return res.json({ message: productsFilter })
    } 

    res.json({ message: products })
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id

    const product = products.find(p => p.id === Number(id))

    res.json({
        message: product
        }
    )
})

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

