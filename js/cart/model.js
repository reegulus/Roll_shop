export default class Model {
    constructor(props) {
        this.card = []
    }

    addToCart(product) {
        this.card.push(JSON.parse(JSON.stringify(product)))

    }

}