const fs = require('fs');

// Lee el archivo JSON
fs.readFile('Users.json', 'utf8', (error, data) => {
    if (error) {
        console.error(error)
        return
    }

    // Elimina las comillas de las claves
    const newData = data.replace(/"([^"]+)":/g, '$1:')

    // Escribe el resultado en un archivo .js
    fs.writeFile('Users.js', `module.exports = ${newData};`, 'utf8', (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Archivo .js generado exitosamente.')
        }
    })
})