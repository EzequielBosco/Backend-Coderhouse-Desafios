class ProductManager {
  #products = []
  #idProduct = 0

  constructor() {
    this.#products = []
  }

  getProducts() {
    return this.#products
  }

  // addProduct(title, description, price, thumbnail, code, stock) {
  //   this.#idProduct++
  //   const newProduct = {
  //     id: this.#idProduct,
  //     title: title = "producto prueba",
  //     description: description = "Este es un producto prueba",
  //     price: price = 200,
  //     thumbnail: thumbnail = "Sin imagen",
  //     code: code = "abc123",
  //     stock: stock = 25
  //   }
  //   this.#product.push(newProduct)
  // }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios")
      return
    }

    const existingProduct = this.#products.some(p => p.code === code);
    if (existingProduct) {
      console.log("El code ya esta en uso")
      return
    }

    this.#idProduct++
    const newProduct = {
      id: this.#idProduct,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }
    this.#products.push(newProduct)
  }

  getProductById(idProduct) {
    const product = this.#products.filter(p => p.id === idProduct)
    if (product.length > 0) {
      console.log("Producto encontrado")
    } else {
      console.log("No se encontro el producto")
    }
  }
}

// const product1 = new ProductManager()
// product1.addProduct()
// console.log(product1.getProduct())

const product2= new ProductManager()
product2.addProduct("producto", "descripcion producto", 25, "no imagen", 123, 25)
console.log(product2.getProducts())

const product3= new ProductManager()
product3.addProduct("producto nuevo", "descripcion producto", 60, "no imagen", 456, 545)
product3.addProduct("producto nuevo", "descripcion producto", 60, "no imagen", 456, 545)
console.log(product3.getProducts())

const product4= new ProductManager()
product4.addProduct("producto nuevo", "descripcion producto")
console.log(product4.getProducts())
