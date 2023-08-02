const fs = require('fs')
const crypto = require('crypto')
const { json } = require('stream/consumers')

class UsersManager {
    users = []
    path = ""

    constructor(file) {
       this.path = `${process.cwd()}/${file}`
    }

    async create(user) {
        try {
            const { name, lastname, username, password } = user

            const userlnfo = {
                name, 
                lastname, 
                username, 
                password: this.#hashPassword(password) 
            }

            this.users.push(userlnfo)
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(this.users)
            )

            console.log(this.users)
        } catch (error) {
            console.log(error)
        }
    }

    async userValidation(username, password) {
        try{
            const data = await fs.promises.readFile(this.path, 'utf-8')
            const users = JSON.parse(data)
            const user = users.find(u => u.username === username)

            if (!user) {
                console.log("Usuario no encontrado")
                return
            }

            if(this.#validatePassword(password, user.password)) {
                return console.log("logueado")
            } else {
                return console.log("contraseña incorrecta")
            }
        } catch (error) {
            console.log(error)
        }
    }

    #validatePassword(password, hashPassword) {
        const hash = this.#hashPassword(password)
        return hash === hashPassword
    }

    #hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex')
    }
}

module.exports = UsersManager