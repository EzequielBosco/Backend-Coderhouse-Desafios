const app = require('./app')

const httpServer = app.listen(3000, () => {
    console.log('Server running at port 3000')
})

module.exports = httpServer