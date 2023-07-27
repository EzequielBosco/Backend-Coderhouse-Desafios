const ProductManager = require("./managerUsuarios")

async function main() {
    
    const productManager = new ProductManager()

    const product = {
        title: "Samsung",
        description: "Nuevas velocidades de procesamiento",
        price: 23,
        thumbnail: "no image",
        code: "code",
        stock: 12
    }

    await productManager.addProduct(
        product.title,
        product.description,
        product.price,
        product.thumbnail,
        product.code,
        product.stock
    )

    const product1 = {
        title: "Apple",
        description: "Nuevas velocidades de memoria",
        price: 60,
        thumbnail: "no image",
        code: "code1",
        stock: 10
    }

    await productManager.addProduct(
        product1.title,
        product1.description,
        product1.price,
        product1.thumbnail,
        product1.code,
        product1.stock
    )

    const updatedFields = {
        price: 20,
        stock: 25,
    }
    await productManager.updateProduct(0, updatedFields)
    await productManager.deleteProduct(2)

    try {
        const products = await productManager.getProducts()
        console.log(products)
    } catch (err) {
        console.log(err)
    }
}

main()