const app = require('./app')
const {Server} = require('socket.io')

const httpServer = app.listen(3000, () => {
    console.log('Server running at port 3000')
})

const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    socket.on('message', payload => {
        console.log(payload, socket.id)
    })
})