export default class Model {
    constructor() {
        this.products = []
    }

    async loadProducts() {
        const response = await fetch('./js/products.json')
        this.products = await response.json()
    }

    updateCounter(id, action) {
       const product =  this.products.find((item) => item.id === id)
        console.log(product)
        console.log(action)
    }
}