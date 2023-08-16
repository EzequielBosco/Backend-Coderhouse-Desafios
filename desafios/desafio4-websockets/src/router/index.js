const productsController = require('../products/controller.products')
const realTimeProductsController = require('../realTimeProducts/controller.realTimeProducts')

const router = app => {
    app.use ('/products', productsController)
    app.use ('/realtimeproducts', realTimeProductsController)
}

module.exports = router