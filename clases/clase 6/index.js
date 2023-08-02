// SIN EXPRESS -------------------

// const http = require('http')

// const server = http.createServer((request, response) => {
//     response.end('hello')
// })

// server.listen(3000, () => {
//     console.log('server running at port 3000')
// })

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.send('hello')
    res.send('<p>hello</p>')
})

const users = [
    {
        "id": 1,
        "Name": "Ezequiel",
        "Age": 23
    },
    {
        "id": 2,
        "Name": "Nahuel",
        "Age": 20
    },
    {
        "id": 3,
        "Name": "Juan",
        "Age": 43
    }
]

app.get('/users', (req, res) => {
    const { limit } = req.params
    const usersFilter = users.slice(0, limit || 10)
    res.json({ message: usersFilter })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    const user = users.find(user => user.id === Number(id))

    res.json({
        message: user
        }
    )
})

app.listen(3000, () => {
    console.log('server running at port 3000')
})