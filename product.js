/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
PRODUCT.JS
========================================== */

const products = [];

// ==========================================
// WOMEN SUITS
// ==========================================

for(let i=13;i<=255;i++){

let no = String(i).padStart(4,"0");
  
let fileNo = String(i).padStart(4,"0");

products.push({

id:"WS"+fileNo,

code:"APD-WS-"+fileNo,

name:"Ladies Suit "+i,

category:"women-suits",

price:999+(i*10),

oldPrice:1499+(i*10),

offer:"20% OFF",

stock:"In Stock",

colour:"Multi Colour",

size:"M L XL XXL",

image:`images/logo/women-suits/IMG-20260628-WA${fileNo}.jpg`,

description:"Premium Punjabi Ladies Suit"

});

}

// ==========================================
// WOMEN HANDBAGS
// ==========================================

for(let i=1;i<=28;i++){

let no = String(i).padStart(4,"0");

products.push({

id:"WH"+no,

code:"APD-WH-"+no,

name:"Ladies Handbag "+i,

category:"women-handbags",

price:499+(i*15),

oldPrice:799+(i*15),

offer:"15% OFF",

stock:"In Stock",

colour:"Multi Colour",

size:"Standard",

image:`images/logo/women-handbags/IMG-20260628-WA${no}.jpg`,

description:"Premium Ladies Handbag"

});

}

// ==========================================
// MEN WEAR
// ==========================================

for(let i=1;i<=7;i++){

let no = String(i).padStart(4,"0");

products.push({

id:"MW"+no,

code:"APD-MW-"+no,

name:"Men T-Shirt "+i,

category:"men",

price:699+(i*20),

oldPrice:999+(i*20),

offer:"10% OFF",

stock:"In Stock",

colour:"Multi Colour",

size:"M L XL XXL",

image:`images/logo/men/IMG-20260628-WA${no}.jpg`,

description:"Premium Men Wear"

});

}

// ==========================================
// GET PRODUCT
// ==========================================

function getProduct(code){

return products.find(item=>item.code===code);

}

// ==========================================
// CATEGORY FILTER
// ==========================================

function getProductsByCategory(category){

return products.filter(item=>item.category===category);

}

// ==========================================
// SEARCH
// ==========================================

function searchProduct(keyword){

keyword = keyword.toLowerCase();

return products.filter(item=>

item.name.toLowerCase().includes(keyword) ||

item.code.toLowerCase().includes(keyword)

);

}

// ==========================================
// FEATURED PRODUCTS
// ==========================================

const featuredProducts = products.slice(0,12);

// ==========================================
// LATEST PRODUCTS
// ==========================================

const latestProducts = [...products].reverse();

// ==========================================
// OFFERS
// ==========================================

const offerProducts = products.filter(product =>

product.offer !== ""

);

// ==========================================
// STOCK FILTER
// ==========================================

function getInStockProducts(){

return products.filter(product=>

product.stock==="In Stock"

);

}

// ==========================================
// PRICE FILTER
// ==========================================

function getProductsByPrice(min,max){

return products.filter(product=>

product.price>=min && product.price<=max

);

}

// ==========================================
// SORTING
// ==========================================

function sortLowToHigh(){

return [...products].sort(

(a,b)=>a.price-b.price

);

}

function sortHighToLow(){

return [...products].sort(

(a,b)=>b.price-a.price

);

}

// ==========================================
// TOTAL PRODUCTS
// ==========================================

console.log(

"Total Products : ",

products.length

);

// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(productList = products){

const container = document.getElementById("product-container");

if(!container) return;

container.innerHTML = "";

productList.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<span class="offer-badge">${product.offer}</span>

<img
src="${product.image}"
alt="${product.name}"
onclick="openProduct('${product.code}')">

<h3>${product.name}</h3>

<p>${product.description}</p>

<h4>₹${product.price}</h4>

<del>₹${product.oldPrice}</del>

<br>

<span class="stock-badge in-stock">
${product.stock}
</span>

<br><br>

<button
class="btn btn-cart"
onclick="addToCart('${product.code}')">

🛒 Add To Cart

</button>

<button
class="btn btn-buy"
onclick="buyNow('${product.code}')">

⚡ Buy Now

</button>

</div>

`;

});

}

// ==========================================
// AUTO LOAD
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

displayProducts(products);

});

// ==========================================
// ADD TO CART
// ==========================================

function addToCart(code){

const product = getProduct(code);

if(!product) return;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("✅ Product Added To Cart");

updateCartCount();

}

// ==========================================
// BUY NOW (WHATSAPP)
// ==========================================

function buyNow(code){

window.location.href = "order.html?code=" + code;

}

// ==========================================
// OPEN PRODUCT PAGE
// ==========================================

function openProduct(code){

window.location.href = `product.html?code=${code}`;

}

// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}

// ==========================================
// AUTO START
// ==========================================

updateCartCount();

