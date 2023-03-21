const productsData = JSON.parse( localStorage.getItem('productsData') );
const cart = JSON.parse(localStorage.getItem('cart'));

document.querySelector('.ckeckout #cart-count').textContent = cart.length;



//В этой Ф теперь вызывать Ф calcTotalCart из includes чтобы отрисовывать товары и не дублировать код
const renderCart = (cart, products) => {
    // let sum = 0;
    // for (const cartId of cart) {
    //     for (const product of products) {
    //        if (cartId == product.id) {
    //         const title = product.title;
    //         const img = product.img;
    //         const price = product.price;
    //         sum += +price;
            
    //     }
    //     }
    // }

    // localStorage.setItem('cartTotal', sum);

    
    

}

renderCart(cart,productsData);














