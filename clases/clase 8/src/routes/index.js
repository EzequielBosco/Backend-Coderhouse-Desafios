const productsController = require('../products/controller')

const router = app => {
    // app.use('/')
    // app.use('/users')
    app.use('/products', productsController)
}

module.exports = router