// ==========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// SCRIPT.JS
// PART 1
// ==========================================

// Load Products
let allProducts = [...products];

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// -------------------------
// Update Cart Count
// -------------------------

function updateCartCount(){

const cartCount=document.getElementById("cart-count");

if(cartCount){

cartCount.innerText=cart.length;

}

}

// -------------------------
// Save Cart
// -------------------------

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

}

// -------------------------
// Add To Cart
// -------------------------

function addToCart(code){

const product=getProduct(code);

if(!product){

alert("Product Not Found");

return;

}

cart.push(product);

saveCart();

alert(product.name+" Added To Cart");

}

// -------------------------
// Load Products
// -------------------------

function loadProducts(productList = allProducts){

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

<span class="offer-badge">${product.offer}</span>

<h3>${product.name}</h3>

<p>${product.description}</p>

<h4>₹${product.price}</h4>

<del>₹${product.oldPrice}</del>

<br><br>

<button class="btn btn-cart"
onclick="addToCart('${product.code}')">

🛒 Add To Cart

</button>

<button class="btn btn-buy"
onclick="openProduct('${product.code}')">

Buy Now

</button>

</div>

`;

});

}

// -------------------------
// Search Products
// -------------------------

function searchProducts(){

const keyword = document
.getElementById("searchBox")
.value
.toLowerCase();

const filtered = allProducts.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword) ||

product.code.toLowerCase().includes(keyword)

);

loadProducts(filtered);

}

// -------------------------
// Filter Category
// -------------------------

function filterCategory(category){

const filtered = allProducts.filter(product =>

product.category === category

);

loadProducts(filtered);

}

// -------------------------
// Open Product Page
// -------------------------

function openProduct(code){

localStorage.setItem("selectedProduct",code);

window.location.href="product.html";

}

// -------------------------
// Load Banner
// -------------------------

function loadBanner(){

const banner=document.getElementById("banner-image");

if(!banner) return;

const savedBanner=localStorage.getItem("banner");

if(savedBanner){

banner.src=savedBanner;

}

}

// -------------------------
// Website Start
// -------------------------

document.addEventListener("DOMContentLoaded",()=>{

updateCartCount();

loadProducts();

loadBanner();

});

