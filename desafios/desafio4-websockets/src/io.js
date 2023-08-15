const httpServer = require('/index.js')
const {Server} = require('socket.io')

const io = new Server(httpServer)

io.on('connection', socket => {
    socket.on('message', payload => {
        console.log(payload, socket.id)
    })
})

module.exports = socketServer