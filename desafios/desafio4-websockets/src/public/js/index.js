const socket = io()

const form = document.getElementById('crear-producto')

form.addEventListener('submit', event => {
    event.preventDefault()

    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => (obj[key] = value))
    socket.emit('product', obj)

    socket.on("products", (data) => {
        let output = `<ul>`
    
        data.forEach(item => {
            output += `<li>${item.data.name} - ${item.data.price}</li>`
        })
    
        output += `</ul>`
        document.getElementById("products").innerHTML = output
    })
})