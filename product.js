let products = []
let id = 0

function resetProducts() {
    products = []
    id = 0
}

function addProduct(name, price) {
    if(name === undefined || price === undefined || name === null || price === null){
        throw new Error('name and price must be defined')
    }else if(products.findIndex(product => product.name === name) != -1){
        throw new Error('Product with that name already exists')
    }else{
        const product = {
            id: id,
            name: name,
            price: price
        }
        products.push(product)
        id++
    }
}

function removeProduct(id){
    const index = products.findIndex(prod => prod.id === id)
    if(index === -1){
        throw new Error('Product does not exist')
    }else{
        products.splice(index, 1)
    }
}

function getProducts() {
    return products
}

function getProduct(id) {
    const product = products.find(prod => prod.id === id)
    if(product === undefined){
        throw new Error('Product does not exist')
    }else{
        return product
    }
}

function updateProduct(id, name, price) {
    const index = products.findIndex(product => product.id === id)
    if(index === -1){
        throw new Error('Product does not exist')
    }else{
        if(name !== undefined){
            products[index].name = name
        }
        if(price !== undefined){
            products[index].price = price
        }
    }
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}