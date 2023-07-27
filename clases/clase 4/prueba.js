const fs = require("fs")

class ManagerUsuarios {
    constructor(file) {
        this.file = file
    }
    async crearUsuario(usuario) {
        const {nombre, apellido, edad, curso} = usuario
        const infoUsers = {
            nombre, apellido, edad, curso
        }

        const users = []
        users.push(infoUsers)

        await fs.promises.writeFile(this.file, JSON.stringify(users))
        return infoUsers
    }

    async consultarUsuarios() {
        if(fs.existsSync(this.file)) {
            const data = await fs.promises.readFile(this.file, 'utf-8')
            const users = JSON.parse(data)
            return users
        }

        return []
    }
}

module.exports = ManagerUsuarios