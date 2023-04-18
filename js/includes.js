const header = `
<!--top-header-->
<div class="top-header">
    <div class="container">
        <div class="top-header-main">
            <div class="col-md-6 top-header-left">
                <div class="drop">
                    <div class="box">
                        <select tabindex="4" class="dropdown drop">
                            <option value="" class="label">Dollar :</option>
                            <option value="1">Dollar</option>
                            <option value="2">Euro</option>
                        </select>
                    </div>
                    <div class="box1">
                        <select tabindex="4" class="dropdown">
                            <option value="" class="label">English :</option>
                            <option value="1">English</option>
                            <option value="2">French</option>
                            <option value="3">German</option>
                        </select>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>

            <div class="col-md-6 top-header-left">
                <div class="cart box_1">
 
                    <!-- Button trigger modal -->
                    <a data-toggle="modal" data-target="#signIn" href="" id="signin" style="color:#fff;margin-right:10px">Sign in</a>
                    <a data-toggle="modal" data-target="#signUp" href="" id="signup" style="color:#fff;margin-right:10px">Sign up</a>

                   
                    <a id="cart-box" style="display:none" href="checkout.html">
                         <div class="total">
                            <span>$</span>
                            <span class="simpleCart_total"></span></div>
                            <img src="images/cart-1.png" alt="" />
                    </a>
                    
                    <div class="clearfix"> </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--top-header-->
<!--start-logo-->
<div class="logo">
    <a href="index.html"><h1>Luxury Watches</h1></a>
</div>
<!--start-logo-->
<!--bottom-header-->
<div class="header-bottom">
    <div class="container">
        <div class="header">
            <div class="col-md-9 header-left">
            <div class="top-nav">
                <ul class="memenu skyblue"><li class="active"><a href="index.html">Home</a></li>
                    <li class="grid"><a href="#">Men</a>
                        <div class="mepanel">
                            <div class="row">
                                <div class="col1 me-one">
                                    <h4>Shop</h4>
                                    <ul>
                                        <li><a href="products.html">New Arrivals</a></li>
                                        <li><a href="products.html">Blazers</a></li>
                                        <li><a href="products.html">Swem Wear</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Handbags</a></li>
                                        <li><a href="products.html">T-Shirts</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">My Shopping Bag</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Style Zone</h4>
                                    <ul>
                                        <li><a href="products.html">Shoes</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">Brands</a></li>
                                        <li><a href="products.html">Coats</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Trousers</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Popular Brands</h4>
                                    <ul>
                                        <li><a href="products.html">499 Store</a></li>
                                        <li><a href="products.html">Fastrack</a></li>
                                        <li><a href="products.html">Casio</a></li>
                                        <li><a href="products.html">Fossil</a></li>
                                        <li><a href="products.html">Maxima</a></li>
                                        <li><a href="products.html">Timex</a></li>
                                        <li><a href="products.html">TomTom</a></li>
                                        <li><a href="products.html">Titan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="grid"><a href="#">Women</a>
                        <div class="mepanel">
                            <div class="row">
                                <div class="col1 me-one">
                                    <h4>Shop</h4>
                                    <ul>
                                        <li><a href="products.html">New Arrivals</a></li>
                                        <li><a href="products.html">Blazers</a></li>
                                        <li><a href="products.html">Swem Wear</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Handbags</a></li>
                                        <li><a href="products.html">T-Shirts</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">My Shopping Bag</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Style Zone</h4>
                                    <ul>
                                        <li><a href="products.html">Shoes</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">Brands</a></li>
                                        <li><a href="products.html">Coats</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Trousers</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Popular Brands</h4>
                                    <ul>
                                        <li><a href="products.html">499 Store</a></li>
                                        <li><a href="products.html">Fastrack</a></li>
                                        <li><a href="products.html">Casio</a></li>
                                        <li><a href="products.html">Fossil</a></li>
                                        <li><a href="products.html">Maxima</a></li>
                                        <li><a href="products.html">Timex</a></li>
                                        <li><a href="products.html">TomTom</a></li>
                                        <li><a href="products.html">Titan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="grid"><a href="#">Kids</a>
                        <div class="mepanel">
                            <div class="row">
                                <div class="col1 me-one">
                                    <h4>Shop</h4>
                                    <ul>
                                        <li><a href="products.html">New Arrivals</a></li>
                                        <li><a href="products.html">Blazers</a></li>
                                        <li><a href="products.html">Swem Wear</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Handbags</a></li>
                                        <li><a href="products.html">T-Shirts</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">My Shopping Bag</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Style Zone</h4>
                                    <ul>
                                        <li><a href="products.html">Shoes</a></li>
                                        <li><a href="products.html">Watches</a></li>
                                        <li><a href="products.html">Brands</a></li>
                                        <li><a href="products.html">Coats</a></li>
                                        <li><a href="products.html">Accessories</a></li>
                                        <li><a href="products.html">Trousers</a></li>
                                    </ul>
                                </div>
                                <div class="col1 me-one">
                                    <h4>Popular Brands</h4>
                                    <ul>
                                        <li><a href="products.html">499 Store</a></li>
                                        <li><a href="products.html">Fastrack</a></li>
                                        <li><a href="products.html">Casio</a></li>
                                        <li><a href="products.html">Fossil</a></li>
                                        <li><a href="products.html">Maxima</a></li>
                                        <li><a href="products.html">Timex</a></li>
                                        <li><a href="products.html">TomTom</a></li>
                                        <li><a href="products.html">Titan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="grid"><a href="typo.html">Blog</a>
                    </li>
                    <li class="grid"><a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="col-md-3 header-right">
            <div class="search-bar">
                <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}">
                <input type="submit" value="">
            </div>
        </div>
        <div class="clearfix"> </div>
        </div>
    </div>
</div>


<!-- Sign in Modal -->
<div class="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Login</h4>
      </div>
      <div class="modal-body">
            <input type="email" class="form-control" style="margin-bottom:10px" placeholder="Input your email">
            <input type="password" class="form-control" placeholder="Input your password">
            <label class="auth-error"></label>
      </div>
      <div class="modal-footer">
        <button id="login" type="button" class="btn btn-default">Log in</button>
      </div>
    </div>
  </div>
</div>

<!-- Sign up Modal -->
<div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Registration</h4>
      </div>
      <div class="modal-body">
            <input type="email" class="form-control" style="margin-bottom:10px" placeholder="Input your email">
            <label class="email-error"></label>
            <input type="password" class="form-control" style="margin-bottom:10px" placeholder="Input your password">
            <input id="password-confirm" type="password" class="form-control" placeholder="Confirm your password">
            <label class="password-error"></label>
      </div>
      <div class="modal-footer">
        <button  id="register" type="button" class="btn btn-default">Registrate</button>
      </div>
    </div>
  </div>
</div>
`;




const footer = `
<!--information-starts-->
<div class="information">
    <div class="container">
        <div class="infor-top">
            <div class="col-md-3 infor-left">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#"><span class="fb"></span><h6>Facebook</h6></a></li>
                    <li><a href="#"><span class="twit"></span><h6>Twitter</h6></a></li>
                    <li><a href="#"><span class="google"></span><h6>Google+</h6></a></li>
                </ul>
            </div>
            <div class="col-md-3 infor-left">
                <h3>Information</h3>
                <ul>
                    <li><a href="#"><p>Specials</p></a></li>
                    <li><a href="#"><p>New Products</p></a></li>
                    <li><a href="#"><p>Our Stores</p></a></li>
                    <li><a href="contact.html"><p>Contact Us</p></a></li>
                    <li><a href="#"><p>Top Sellers</p></a></li>
                </ul>
            </div>
            <div class="col-md-3 infor-left">
                <h3>My Account</h3>
                <ul>
                    <li><a href="account.html"><p>My Account</p></a></li>
                    <li><a href="#"><p>My Credit slips</p></a></li>
                    <li><a href="#"><p>My Merchandise returns</p></a></li>
                    <li><a href="#"><p>My Personal info</p></a></li>
                    <li><a href="#"><p>My Addresses</p></a></li>
                </ul>
            </div>
            <div class="col-md-3 infor-left">
                <h3>Store Information</h3>
                <h4>The company name,
                    <span>Lorem ipsum dolor,</span>
                    Glasglow Dr 40 Fe 72.</h4>
                <h5>+955 123 4567</h5>
                <p><a href="mailto:example@email.com">contact@example.com</a></p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--information-end-->
<!--footer-starts-->
<div class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="col-md-6 footer-left">
                <form>
                    <input type="text" value="Enter Your Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Your Email';}">
                    <input type="submit" value="Subscribe">
                </form>
            </div>
            <div class="col-md-6 footer-right">
                <p>© 2015 Luxury Watches. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--footer-end-->
`;

document.querySelector('#header')?.insertAdjacentHTML('beforeend',header);
document.querySelector('#footer')?.insertAdjacentHTML('beforeend',footer);
// document.querySelector('#footer').insertAdjacentHTML('afterend','<script src="js/bootstrap.js"></script>');



(() => {
    let sum = localStorage.getItem('cartTotal') || '0';
    document.querySelector('.total .simpleCart_total').textContent = sum;
})();

const calcCardCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
	document.querySelector('.ckeckout #cart-count').textContent = cart.length;
}

const doProductsAction = (cart, products, param) => { // [1,6,7]
    console.log(cart);
   let sum = 0; 

   if (cart.length == 0) {
        localStorage.setItem('cartTotal', sum);
        document.querySelector('.total .simpleCart_total').textContent = sum;
   } else {


     for (const cartId of cart) {
        for (const product of products) {
           if (cartId == product.id) {
            const id = product.id;
            const title = product.title;
            const img = product.img;
            const price = product.price;
           if (param == 'calcSum') {
            sum += +price;
            localStorage.setItem('cartTotal', sum);
            document.querySelector('.total .simpleCart_total').textContent = sum;
           } else if (param == 'renderCart') {
            const productMarkup = `<ul data-id=${id} class="cart-header">
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
  
}
   
}


const deleteItemFromLS = (id) => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        const delInd = cart.indexOf(id);
        cart.splice(delInd,1);
        localStorage.setItem('cart',JSON.stringify(cart));
    }
}


// 1679591881252
//1679591926366

// Когда удаляем товар из корзины
let oldDate;
document.querySelector('.cart-items')?.addEventListener('click', (e) => {
    if (oldDate && (new Date().getTime() - oldDate <= 1000) ) {
        return;
    }
    if (e.target.matches('.close1')) {
        // console.log(123);
        oldDate = new Date().getTime();

        deleteItemFromLS(e.target.parentElement.dataset.id); 

       $(e.target).parent().fadeOut('slow', function(c){
            $(e.target).parent().remove();
        });

        doProductsAction( 
           
            JSON.parse(localStorage.getItem('cart')), 
            JSON.parse(localStorage.getItem('productsData')), 
            'calcSum');
        
	
            calcCardCount();
            
    }
})


const renderBtnsIfAuth = () => {
    document.querySelector('#signin')?.remove();
    document.querySelector('#signup')?.remove();
    document.querySelector(".cart.box_1")?.insertAdjacentHTML('afterbegin', `<a href="" id="logout" style="color:#fff;margin-right:10px">Logout</a>`);
    document.querySelector('#cart-box').style.display = 'inline-block';
}


const logout = () => {
    localStorage.removeItem('authUser');
    document.querySelector('#logout').remove();
    document.querySelector(".cart.box_1")?.insertAdjacentHTML('afterbegin',`
    <a data-toggle="modal" data-target="#signIn" href="" id="signin" style="color:#fff;margin-right:10px">Sign in</a>
    <a data-toggle="modal" data-target="#signUp" href="" id="signup" style="color:#fff;margin-right:10px">Sign up</a> 
    `);
    document.querySelector('#cart-box').style.display = 'none';
}

document.querySelector('#login').addEventListener('click', () => {
    const emailField = document.querySelector('#signIn input[type="email"]');
    const passwordField = document.querySelector('#signIn input[type="password"]');

    if (localStorage.getItem('users')) {
        let usersArray = JSON.parse(localStorage.getItem('users'));

        const user = usersArray.find((user) => {
            return user.email == emailField.value && user.password == passwordField.value;
        });
        
        // const email = 'user1@mail.ru'; 
        // const password = '1Aa234';
        //user1@gmail.com
        //Qwe123

        if (user) {
            localStorage.setItem('authUser',user.id);
            $('#signIn').modal('hide');

            renderBtnsIfAuth();
          
            document.querySelector('#logout').addEventListener('click', (e) => {
                e.preventDefault();     
                logout();
            });

        } else {
            label = `<label id="authError" style="color: red;font-style:italic;font-size:12px">Check email and password</label>`;
            document.querySelector('#signIn .auth-error').innerHTML = label;
        }

        
    }

})


document.querySelector('#register').addEventListener('click', () => {
    const emailField = document.querySelector('#signUp input[type="email"]');
    const passwordField = document.querySelector('#signUp input[type="password"]');
    const passwordConfirmField = document.querySelector('#password-confirm');

    let label; 
    const isMatchEmail = emailField.value.match(/^\S+@\S+\.\S+$/);
    const isMatchPassword = passwordField.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

    if (!isMatchEmail) {
        emailField.style.border = '1px solid red';
        label = `<label id="errorEmailLabel" style="color: red;font-style:italic;font-size:12px">Check email correctness</label>`;
        document.querySelector('#signUp .email-error').innerHTML = label;
    } else {
        emailField.style.borderColor = '#ccc';
        document.querySelector('#errorEmailLabel')?.remove();
    }

    if (!isMatchPassword || !passwordConfirmField.value || passwordField.value !== passwordConfirmField.value) {
        passwordField.style.border = '1px solid red';
        passwordConfirmField.style.border = '1px solid red';
        label = `<label id="errorPasswordLabel" style="color: red;font-style:italic;font-size:12px">Check password correctness</label>`;
        document.querySelector('#signUp .password-error').innerHTML = label;
    }  else {
        passwordField.style.borderColor = '#ccc';
        document.querySelector('#errorPasswordLabel')?.remove();
        // document.querySelector('#signIn').modal('hide');     
    }

    if (isMatchEmail && isMatchPassword && passwordField.value == passwordConfirmField.value) {
        if ( localStorage.getItem('users') && JSON.parse(localStorage.getItem('users')).length > 0 ) {
            let users = JSON.parse(localStorage.getItem('users'));
            
            const isUser = users.find((item)=>{
                return item.email == emailField.value;
            })

            if (!isUser) {
                const id = +users[users.length-1].id + 1;
                const user = {
                    id,
                    email: emailField.value,
                    password: passwordField.value,
                };
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('authUser',id);
                $('#signUp').modal('hide');
                emailField.value = '';
                passwordField.value = '';
                renderBtnsIfAuth();
                document.querySelector('#logout').addEventListener('click', (e) => {
                    e.preventDefault();     
                    logout();
                });
            } else {
                alert('Email is not unique');
            }
            
        } else {
            const users = [];
            const user = {
                id:1,
                email: emailField.value,
                password: passwordField.value,
            };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('authUser',"1");
            $('#signUp').modal('hide');
            emailField.value = '';
            passwordField.value = '';
            renderBtnsIfAuth();
            document.querySelector('#logout').addEventListener('click', (e) => {
                e.preventDefault();     
                logout();
            });
        }

    // 123321Ru
    //d@m.ry



    }

})


document.addEventListener('DOMContentLoaded', () => {
   
    if (localStorage.getItem('authUser')) {
        const userId = localStorage.getItem('authUser');
        renderBtnsIfAuth();
    }

    document.querySelector('#logout')?.addEventListener('click', (e) => {
        e.preventDefault();     
        logout();
    });
})


/*
   


  
*/



// localStorage.setItem('users',JSON.stringify([
//     {email: 'user1@mail.ru', password: '1Aa234'},
//     {email: 'user2@mail.ru', password: '5Aa67'},
// ]));


// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//     if (number > 0) {
//         return number;
//     }
// //   return number > 0;
// });

// console.log( positiveArr ); // 1,2,3

// var arr = [1,2,3,4,5,6,7];
// //newArr = [2,4,6]

// var newArr = arr.filter(function(elem) {
//     // if (elem%2 == 0) {
//         return elem%2 == 0;
//     // }
// })
// console.log(newArr);

// var arr = ['bbc', 'bmw', 'js'];

// var newArr = arr.map(function(elem,i){
//     if (i%2 != 0) {
//         return elem.toUpperCase();
//     } else {
//         return elem;
//     }
// })

// console.log(newArr);



// var arr = [{id:1,name:'dfdf'},2,3,4,5,6,7];

// var allPositive = arr.some(function(elem) {
//     return elem > 0;
// })

// var allPositive = arr.every(function(elem) {
//     return elem > 0;
// })
// console.log(allPositive);

// var id = 2;

// var isFound = arr.find(function(elem) {
//     if (elem.id == id) {
//         return elem;
//     }
//     // return elem.id == id;
// })
// console.log(isFound);


// var arr  = [16,2,1,2,15,-1,6,8,5,9];
// var newArr = [];
// var min = arr[0]; //16

// for (let i = 0; i < arr.length; i++) {

//    for (let j = 0; j < arr.length; j++) {
//      if (arr[j]<arr[i]) {
//         min = arr[j];
//     }  
// }
// arr.pop(min);
//    newArr.push(min);
// }

// console.log(newArr);

// function t(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
  
//   let arr = [16,2,1,2,15,-1,6,8,5,9];
  
//   arr.sort(t);
  
//   console.log(arr);  // 1, 2, 15






// arr.sort();
// console.log(arr);




// let arr2 = [-10,-11,-12];
// let arr1 = [16,2,1,2,15,-1,6,8,5,9,...arr2];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

// let arr3 = [...arr1,...arr2]; // spread
// console.log(arr1);

// let name = arr[0];
// let gender = arr[1];
// let age = arr[2];
// let [name,gender,age] = ['John','man',32];
// let arr = ['John','man',32];
// let [name,gender,age] = arr;
// console.log(name,gender,age,arr);

// первый и второй элементы не нужны
// let [, , a] = ["Юлий", "Цезарь", "Император", "Рима"];
// console.log(a);

// let [firstName, lastName, ...rest] = ["Юлий", "Цезарь", "Император", "Рима","!"];

// console.log(firstName, lastName, rest);




