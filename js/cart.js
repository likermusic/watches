const productsData = JSON.parse( localStorage.getItem('productsData') );
const cart = JSON.parse( localStorage.getItem('cart') );

const renderCart = (cart, products) => {
    for (const cartId of cart) {
        for (const product of products) {
           if (cartId == product.id) {
            const title = product.title;
            const img = product.img;
            const price = product.price;

            const productMarkup = `<ul class="cart-header">
            <div class="close1"> </div>
                <li class="ring-in"><a href="single.html" ><img src="images/${img}" class="img-responsive" alt=""></a>
                </li>
                <li><span class="name">${title}</span></li>
                <li><span class="cost">$ ${price}</span></li>
                <li><span>Free</span>
                <p>Delivered in 2-3 business days</p></li>
            <div class="clearfix"> </div>
            </ul>`;
            document.querySelector('.cart-items .in-check')?.insertAdjacentHTML('beforeend', productMarkup);
        }
        }
    }


    

}

renderCart(cart,productsData);












