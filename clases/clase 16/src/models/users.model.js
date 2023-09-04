const mongoose = require('mongoose')

const usersCollection = 'user'

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: String,
    gender: String,
    messages: {
        type: [
            {
                message: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'message'
                }
            }
        ],
        default: []
    }
})

userSchema.pre('find', function () {
    this.populate('messages.message')
})

const Users = mongoose.model(usersCollection, userSchema)

module.exports = Users