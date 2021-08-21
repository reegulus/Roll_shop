export default class Model {
    constructor() {
        this.cart = [];
    }

    addToCart(product) {
        let productInCart;

        // Находим товар в корзине
        productInCart = this.cart.find(function (productInCart) {
            return productInCart.id === product.id
        })

        if (productInCart) {
            productInCart.counter = productInCart.counter + product.counter;
        } else {
            const newProduct = JSON.parse(JSON.stringify(product));
            this.cart.push(newProduct);
        }

        console.log(this.cart);

    }
}