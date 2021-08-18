export default class Model {
    constructor() {
        this.products = []
    }

    async loadProducts() {
        const response = await fetch('./js/products.json')
        this.products = await response.json()

        for (const product of this.products) {
            product.counter = 1
        }
    }

    updateCounter(id, action) {
        const product = this.getProduct(id)

        if (action === 'plus') {
            ++product.counter
        }

        if (action === 'minus') {
            --product.counter
        }
        return (product)
    }

    getProduct(id) {
        return this.products.find((item) => item.id === id)
    }

}