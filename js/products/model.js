export default class Model {
    constructor() {
        this.products = []
    }

    async loadProducts() {
        const response = await fetch('./js/products.json')
        this.products = await response.json()
    }
}