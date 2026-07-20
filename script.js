/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
SCRIPT.JS PROFESSIONAL
PART-1
========================================== */

// ==========================
// AUTO START
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    displayProducts(products);

    updateCartCount();

    updateWishlistCount();

});

// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(productList = products){

const container = document.getElementById("product-container");

if(!container) return;

container.innerHTML = "";

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

<br>

<p>${product.stock}</p>

<button
class="btn-cart"
onclick="addToCart('${product.code}')">

🛒 Add To Cart

</button>

<button
class="btn-buy"
onclick="buyNow('${product.code}')">

⚡ Buy Now

</button>

</div>

`;

});

}

// ==========================
// SEARCH
// ==========================

function searchProducts(){

let keyword = document
.getElementById("searchBox")
.value
.toLowerCase();

let result = products.filter(product=>

product.name.toLowerCase().includes(keyword)

||

product.code.toLowerCase().includes(keyword)

||

product.category.toLowerCase().includes(keyword)

);

displayProducts(result);

}

// ==========================
// CATEGORY
// ==========================

function filterCategory(category){

if(category==="all"){

displayProducts(products);

return;

}

let filtered = products.filter(product=>

product.category===category

);

displayProducts(filtered);

}

function showAllProducts(){

displayProducts(products);

}

/* ==========================================
SCRIPT.JS PROFESSIONAL
PART-2
========================================== */

/* ---------- PRODUCT PAGE ---------- */

function openProduct(code){

window.location.href =
"product.html?code=" + code;

}

/* ---------- BUY NOW ---------- */

function buyNow(code){

const product = products.find(p=>p.code===code);

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

/* ---------- ADD TO CART ---------- */

function addToCart(code){

const product = products.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("✅ Added To Cart");

}

/* ---------- CART COUNT ---------- */

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

/* ---------- WISHLIST ---------- */

function addToWishlist(code){

const product = products.find(p=>p.code===code);

if(!product) return;

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if(!wishlist.find(item=>item.code===code)){

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

}

updateWishlistCount();

}

/* ---------- WISHLIST COUNT ---------- */

function updateWishlistCount(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let count = document.getElementById("wishlist-count");

if(count){

count.innerText = wishlist.length;

}

}

/* ---------- ONLINE PAYMENT ---------- */

function payOnline(code){

window.location.href =
"payment.html?code="+code;

}

/* ---------- WHATSAPP ORDER ---------- */

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
