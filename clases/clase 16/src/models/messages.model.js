const mongoose = require('mongoose')

const messageCollection = 'message'

const messageSchema = new mongoose.Schema({
    text: String
})

const Messages = mongoose.model(messageCollection, messageSchema)

module.exports = Messages