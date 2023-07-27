const ManagerUsuarios = require("./prueba/prueba.js")

const managerUsuarios = new ManagerUsuarios("fileUsers.json")

const usuario = {
    nombre: "Ezequiel",
    apellido: "Bosco",
    edad: 23,
    curso: "Software",
}

managerUsuarios.crearUsuario(usuario)

managerUsuarios.consultarUsuarios()
    .then(response => console.log(response))
    .catch(err => console.log(err))