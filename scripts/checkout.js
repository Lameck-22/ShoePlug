import { cart, removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";

let cartSummmaryHTML='';

cart.forEach((cartItem) =>{

    const productsId = cartItem.productsId;

    let matchingProducts;

    products.forEach((products) =>{
        if (products.id ===productsId){
            matchingProducts = products;
        }
    });
    


    cartSummmaryHTML+=` 
    <div class="pro js-cart-item-container-${matchingProducts.id}">
    <div class="img"><img src="${matchingProducts.image}" alt="" height="250px" width="250px"></div>
    <div>${matchingProducts.name}</div>
    <div>${matchingProducts.price}</div>
    <button class="delete-quantity" data-products-id="${matchingProducts.id}">Delete</button>
</div>`
});

document.querySelector('.js-checkout-pro-container').innerHTML = cartSummmaryHTML;

document.querySelectorAll('.delete-quantity').forEach((link) =>{
    link.addEventListener('click',()=>{
        const productsId = link.dataset.productsId;
        removeFromCart(productsId);

        const container = document.querySelector(`.js-cart-item-container-${productsId}`);
        container.remove();
    });
});

