export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart =[{
    productsId:'1',
    quantity:1
    },{
    productsId:'2',
    quantity:1
    }
];
}




function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}




export function addToCart(productsId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productsId===cartItem.productsId){
            matchingItem= cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    }

    else{
        cart.push({productsId: productsId,
                    quantity:0
                })

    }

    saveToStorage();

 }

 export function removeFromCart(productsId){
    const newCart=[];
    cart.forEach((cartItem) => {
        if(cartItem.productsId !== productsId){
            newCart.push(cartItem);
        }
    })

    cart = newCart;
    saveToStorage();
 }