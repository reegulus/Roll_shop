export const elements = {
    productsContainer: document.querySelector('#products-container'),
    cartWrapper: document.querySelector('.cart-wrapper'),
    cartEmptyBadge: document.querySelector('[data-cart-empty]'),
    orderForm: document.querySelector('#order-form'),
    totalPrice: document.querySelector('.total-price')
}

export function renderCart(product) {
    let cartHTML = ''

    product.forEach(function (item) {
        const cartItemHTML = `<div class="cart-item" data-id="${item.id}">
\t<div class="cart-item__top">
\t\t<div class="cart-item__img">
\t\t\t<img src="img/roll/${item.imgSrc}" alt="${item.title}" />
\t\t</div>
\t\t<div class="cart-item__desc">
\t\t\t<div class="cart-item__title">${item.title}</div>
\t\t\t<div class="cart-item__weight">${item.itemInBox} / ${item.weight}</div>

\t\t\t<!-- cart-item__details -->
\t\t\t<div class="cart-item__details">
\t\t\t\t<div class="items items--small counter-wrapper">
\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
\t\t\t\t\t<div class="items__current" data-counter="">${item.counter}</div>
\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
\t\t\t\t</div>

\t\t\t\t<div class="price">
\t\t\t\t\t<div class="price__currency">${item.price}</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<!-- // cart-item__details -->
\t\t</div>
\t</div>
</div>`;
        cartHTML = cartHTML + cartItemHTML
    })

    elements.cartWrapper.innerHTML = cartHTML
}