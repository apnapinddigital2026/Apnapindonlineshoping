/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
SCRIPT.JS
VERSION 3.0
PART-1
========================================== */

// ==========================
// PAGE LOAD
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // Loader Hide
    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },1000);

    }

    // Products Load
    if(typeof products !== "undefined"){

        displayProducts(products);

    }

    updateCartCount();

    updateWishlistCount();

});

// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList){

const container = document.getElementById("product-container");

if(!container) return;

container.innerHTML="";

productList.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}"
onclick="openProduct('${product.code}')">

<h3>${product.name}</h3>

<p>${product.description}</p>

<h4>₹${product.price}</h4>

<del>₹${product.oldPrice}</del>

<p>${product.stock}</p>

<button class="btn-cart"
onclick="addToCart('${product.code}')">

🛒 Add To Cart

</button>

<button class="btn-buy"
onclick="buyNow('${product.code}')">

⚡ Buy Now

</button>

</div>

`;

});

}

/* ==========================================
SCRIPT.JS
PART-2
========================================== */

// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts(){

const keyword = document
.getElementById("searchBox")
.value
.toLowerCase();

const filtered = products.filter(product=>

product.name.toLowerCase().includes(keyword) ||

product.code.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword)

);

displayProducts(filtered);

}

// ==========================
// FILTER CATEGORY
// ==========================

function filterCategory(category){

const filtered = products.filter(product=>

product.category===category

);

displayProducts(filtered);

}

function showAllProducts(){

displayProducts(products);

}

// ==========================
// PRODUCT DETAILS
// ==========================

function openProduct(code){

window.location.href=
"product.html?code="+code;

}

/* ==========================================
SCRIPT.JS
PART-3
========================================== */

// ==========================
// BUY NOW
// ==========================

function buyNow(code){

const product = products.find(item=>item.code===code);

if(!product){

alert("Product Not Found");

return;

}

localStorage.setItem(
"selectedProduct",
JSON.stringify(product)
);

window.location.href="order.html";

}

// ==========================
// ADD TO CART
// ==========================

function addToCart(code){

const product = products.find(item=>item.code===code);

if(!product){

alert("Product Not Found");

return;

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("✅ Product Added To Cart");

}

// ==========================
// CART COUNT
// ==========================

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

/* ==========================================
SCRIPT.JS
PART-4
========================================== */

// ==========================
// WISHLIST
// ==========================

function addToWishlist(code){

const product = products.find(item=>item.code===code);

if(!product) return;

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const exists = wishlist.find(item=>item.code===code);

if(!exists){

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert("❤️ Added To Wishlist");

}

updateWishlistCount();

}

// ==========================
// WISHLIST COUNT
// ==========================

function updateWishlistCount(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const count = document.getElementById("wishlist-count");

if(count){

count.innerText = wishlist.length;

}

}

// ==========================
// PAYMENT
// ==========================

function payOnline(code){

window.location.href="payment.html?code="+code;

}

// ==========================
// WHATSAPP ORDER
// ==========================

function whatsappOrder(product){

let message =
`🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL

Product : ${product.name}

Code : ${product.code}

Price : ₹${product.price}`;

window.open(
"https://wa.me/918872776620?text="+
encodeURIComponent(message),
"_blank"
);

}
