const productsController = require('../products/controller.products')

const router = app => {
    app.use ('/products', productsController)
    app.use ('/realtimeproducts', productsController
    )
}

module.exports = router