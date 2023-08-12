const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const users = [
        {name: "carolina", role: "user"},
        {name: "maria", role: "user"},
        {name: "carlitos", role: "admin"}
    ]

    const user = users[Math.floor(Math.random() * users.length)]
    // res.json({ message : 'hello' }) -- aca uso el html
    res.render('users', {object: user, isAdmin: user.role === 'admin'})
    }
)
module.exports = router