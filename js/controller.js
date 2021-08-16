import ProductsModel from './products/model.js'
import * as productsView from './products/view.js'

const productsModel = new ProductsModel()



//Фсинхронная функция getAndRenderProducts
// 1. Сначало получение товаров из JSON files
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await  productsModel.loadProducts()
    productsView.renderProducts(productsModel.products)
}

getAndRenderProducts()