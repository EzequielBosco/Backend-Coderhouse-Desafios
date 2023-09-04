const express = require('express')
const mongoConnect = require('./db')
const router = require('./router')

const app = express()

app.use(express.json())

router(app)

mongoConnect()

app.listen(3000, () => {
    console.log(3000)
})