const {Server} = require('socket.io')

const products = []
const realTimeServer = httpServer => {
    const io = new Server(httpServer)
    
    io.on('connection', socket => {
        socket.on('product', payload => {
            products.push({data: payload})
            console.log('Id:' + socket.id)
            io.emit("products", products)
        })
    })
}

module.exports = realTimeServer