export default class Model {
    constructor() {
        this.cart = [];
    }

    saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart))
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

        this.saveCartToLocalStorage()

    }

    getTotalCartPrice() {
        let totalPrice = 0

        this.cart.forEach(function(item) {
            totalPrice = totalPrice + item.price * item.counter
        })

        return totalPrice
    }

    updateCounterInCart(id, action) {
        let productInCart

        productInCart = this.cart.find((product) => {
            return id === product.id
        })

        if(action === 'plus') {
            ++productInCart.counter
        }

        if(action === 'minus' && productInCart.counter > 0) {
            --productInCart.counter
        }

        if (productInCart.counter === 0) {
            const index = this.cart.findIndex((item) => {
               return item.id === productInCart.id
            })
            this.cart.splice(index, 1)
        }

        this.saveCartToLocalStorage()
        return productInCart
    }
}