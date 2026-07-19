/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
SCRIPT.JS
VERSION 2.0
========================================== */

// ==============================
// AUTO LOAD
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayProducts(products);

    updateCartCount();

});

// ==============================
// SEARCH
// ==============================

function searchProducts(){

const keyword = document
.getElementById("searchBox")
.value
.toLowerCase();

const result = products.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.code.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword)

);

displayProducts(result);

}

// ==============================
// CATEGORY
// ==============================

function filterCategory(category){

if(category==="all"){

displayProducts(products);

return;

}

const result = products.filter(product =>

product.category===category

);

displayProducts(result);

}

function showAllProducts(){

displayProducts(products);

}

// ==============================
// PRODUCT PAGE
// ==============================

function openProduct(code){

window.location.href =
`product.html?code=${code}`;

}

// ==============================
// BUY NOW
// ==============================

function buyNow(code){

window.location.href =
`order.html?code=${code}`;

}

/* ==========================================
ADD TO CART
========================================== */

function addToCart(code){

const product = getProduct(code);

if(!product){

alert("Product Not Found");

return;

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert("✅ Product Added To Cart");

}

/* ==========================================
CART COUNT
========================================== */

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

/* ==========================================
WISHLIST
========================================== */

function addToWishlist(code){

const product = getProduct(code);

if(!product) return;

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const exists = wishlist.find(item => item.code===code);

if(!exists){

wishlist.push(product);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("❤️ Added To Wishlist");

}else{

alert("Already In Wishlist");

}

}

/* ==========================================
ONLINE PAYMENT
========================================== */

function payOnline(code){

window.location.href="payment.html?code="+code;

}

/* ==========================================
WHATSAPP
========================================== */

function whatsappOrder(product){

let message=

`🛒 APNA PIND DIGITAL

Product : ${product.name}

Code : ${product.code}

Price : ₹${product.price}`;

window.open(

`https://wa.me/918872776620?text=${encodeURIComponent(message)}`,

"_blank"

);

}
