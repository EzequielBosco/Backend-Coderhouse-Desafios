// USO POSTMAN API
const express = require('express')
const users = require('./files/users.js')

const port = 3000
const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
    res.json({ message: users })
})

app.get('/users/:id', middlewareConvertNumber, (req, res) => {
    const { id } = req.params
    numId = Number(id)
    const user = users.find((p) => p.id === id)
    res.json({ message: user })
})

function middlewareConvertNumber(req, res, next) {
    req.params.id = Number(req.params.id)
    next()
}

app.post('/users', (req, res) => {
    const { id, name, lastname, username, password } = req.body

    const userInfo = {
        id,
        name, 
        lastname,
        username,
        password
    }
    users.push(userInfo)
    res.json({ message: 'user created' })
})

app.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { username } = req.body

    const user = users.find((p) => p.id === Number(id))
    user.username = username
    res.json({ message: 'User modificated', user })
})

app.delete('/users/:id', middlewareConvertNumber, (req, res) => {
    const { id } = req.params
    const userIndex = users.findIndex((p) => p.id === id)

    users.splice(userIndex, 1)
    res.json({ message: users })
})

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})