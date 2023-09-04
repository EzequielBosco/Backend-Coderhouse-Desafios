const { Router } = require('express')
const Messages = require('../models/messages.model')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const messages = await Messages.find()
        res.json({ message: messages })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { text } = req.body

        const messageInfo = {
            text
        }

        const newMessage = await Messages.create(messageInfo)

        res.json({ message: newMessage })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router