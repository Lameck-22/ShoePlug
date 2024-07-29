 import {cart, addToCart} from '../data/cart.js';
 import {products} from '../data/products.js';

 

let productsHTML ='';

products.forEach((products) => {
    productsHTML +=`
    <div class="pro">
        <img src="${products.image}" alt="">
        <h4>${products.name}</h4>
        <p>${products.price}</p>
        <button class="js-add-to-cart"
        data-products-id="${products.id}" >
        Add to Cart
        </button>
    </div>`;
    
});

document.querySelector('.js-products-grid')
 .innerHTML = productsHTML;

 

 function updateCartQuantity(){
    let cartQuantity = 0;

        cart.forEach((cartItem) =>{
            cartQuantity += cartItem.quantity;

        })

        document.querySelector('.js-cart-count')
        .innerHTML = cartQuantity;

 }
 

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () =>{
        const productsId = button.dataset.productsId;

        addToCart(productsId);
        updateCartQuantity();

      /*  let matchingItem;

        cart.forEach((item)=>{
            if(productsId===item.productsId){
                matchingItem= item;
            }
        });

        if(matchingItem){
            matchingItem.quantity += 1;
        }

        else{
            cart.push({productsId: productsId,
                        quantity:0
                    })

        }*/

       /* let cartQuantity = 0;

        cart.forEach((item) =>{
            cartQuantity += item.quantity;

        })

        document.querySelector('.js-cart-count')
        .innerHTML = cartQuantity;*/
    });
       
    });
    

  

 