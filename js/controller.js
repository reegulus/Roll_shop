import ProductsModel from './products/model.js'
import * as productsView from './products/view.js'
import CartModel from './cart/model.js'

const productsModel = new ProductsModel()
const cartModel = new CartModel()


//Фсинхронная функция getAndRenderProducts
// 1. Сначало получение товаров из JSON files
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await productsModel.loadProducts()
    productsView.renderProducts(productsModel.products)
}

getAndRenderProducts()

productsView.elements.productsContainer.addEventListener('click', function (event) {
    //Совершаемое действие
    let action = event.target.dataset.action

//Если кликнули по счетчику внутри товаров
    if(action === "plus" || action === "minus") {
        //Находим ID продукта
        const productId = +event.target.closest('.card').dataset.id

        //Запускаем модель для изменения счётчика
        const product = productsModel.updateCounter(productId, action)

        productsView.updateCounter(product)
    }

    if(action === 'add-to-cart') {
        const productId = +event.target.closest('.card').dataset.id
        const product = productsModel.getProduct(productId)
    }

})