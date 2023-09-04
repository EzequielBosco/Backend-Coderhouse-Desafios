const { Router } = require('express')
const Users = require('../models/users.model')
const usersArr = require('../../Users.js')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json({ message: users })
    } catch (error) {
        console.log(error)
    }
})

// para ver estadisticas de la respuesta
// router.get('/fast', async (req, res) => {
//     try {
//         const users = await Users.find({ first_name :'Dani'}).explain('executionStats')
//         res.json({ message: users })
//     } catch (error) {
//         console.log(error)
//     }
// })

router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email, gender } = req.body

        const userInfo = {
            first_name,
            last_name,
            email,
            gender
        }

        const newUser = await Users.create(userInfo)

        res.json({ message: newUser })
    } catch (error) {
        console.log(error)
    }
})

router.post('/many', async (req, res) => {
    try {

        await Users.insertMany(usersArr)

        res.json({ message: 'users created' })
    } catch (error) {
        console.log(error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { message } = req.body

        const user = await Users.findOne({_id: id})

        user.messages.push({ message })

        await Users.updateOne({ _id: id}, user)

        res.json({ message: 'user updated' })
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete-many', async (req, res) => {
    await Users.deleteMany()

    res.json({ message: 'All users deleted' })
})

module.exports = router