const realTimeServer = require('./realTimeServer')
const app = require('./server')

const httpServer = app.listen(3000, () => {
    console.log('Server running at port 3000')
})

realTimeServer(httpServer)