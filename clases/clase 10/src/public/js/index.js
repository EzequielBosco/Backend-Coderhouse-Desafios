socket = io()

const user = {
    name: 'Guest'
}

socket.emit('message', user)