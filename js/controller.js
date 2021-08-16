import ProductsModel from './products/model.js'

const productsModel = new ProductsModel()

console.log(productsModel)


//Фсинхронная функция getAndRenderProducts
// 1. Сначало получение товаров из JSON files
// 2. Только после этого - отображение товаров на странице
async function getAndRenderProducts() {
    await  productsModel.loadProducts()
    console.log(productsModel)
}

getAndRenderProducts()