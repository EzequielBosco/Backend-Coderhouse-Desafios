const UsersManager = require('./userManager')

const usersManager = new UsersManager('users.json')

const user = {
    name: "Ezequiel",
    lastname: "Bosco",
    username: "ezequiel",
    password: "password",
}

usersManager.create(user)

usersManager.userValidation('ezequiel', 'pass') //incorrecta
usersManager.userValidation('ezequiel', 'password')