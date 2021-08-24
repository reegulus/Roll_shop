import ProductsModel from './products/model.js';
import CartModel from './cart/model.js';

import * as productsView from './products/view.js'
import * as cartView from './cart/view.js'
import {updateCounter} from "./cart/view.js";

const productsModel = new ProductsModel();
const cartModel = new CartModel();

console.log(cartModel);

// Асинхронная ф-я getAndRenderProducts
// 1. Сначала получение товаров из JSON файла
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await productsModel.loadProducts();
    productsView.renderProducts(productsModel.products);
}

getAndRenderProducts();

productsView.elements.productsContainer.addEventListener('click', function (event) {
    // Совершаемое действие
    let action = event.target.dataset.action;

    // Если кликнули по счетчику внутри товаров
    if (action === 'plus' || action === 'minus') {
        // Находим ID продукта
        const productId = +event.target.closest('.card').dataset.id;

        // Запускаем модель для изменения счетчика
        const product = productsModel.updateCounter(productId, action);

        // Обновляем счетчик на странице
        productsView.updateCounter(product);
    }

    // Добавить в корзину
    if (action === 'add-to-cart') {
        // Находим ID продукта
        const productId = +event.target.closest('.card').dataset.id;

        // Получить товар из productsModel
        const product = productsModel.getProduct(productId);

        // Добавить в корзину - ДАННЫЕ
        cartModel.addToCart(product);

        cartView.renderCart(cartModel.cart)

        productsModel.resetCounter(product)

        productsView.updateCounter(product)

        const totalPrice = cartModel.getTotalCartPrice()
        cartView.updateOrderPrice(totalPrice)
    }
})

cartView.elements.cartWrapper.addEventListener('click', function(event) {
    let action = event.target.dataset.action

    if(action === 'plus' || action === 'minus') {
        const productId = +event.target.closest('.cart-item').dataset

       const product = cartModel.updateCounterInCart(productId, action)

         if(product.counter > 0) {
             cartView.updateCounter(product)
         } else {
             cartView.removeItemFromCart(product)
         }
    }
})