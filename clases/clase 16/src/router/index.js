const usersController = require('../users/controller.users')
const messagesController = require('../messages/controller.messages')

const router = app => {
    app.use('/users', usersController)
    app.use('/messages', messagesController)
}

module.exports = router