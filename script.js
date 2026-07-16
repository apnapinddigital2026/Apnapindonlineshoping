// ==========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// SCRIPT.JS
// Version 2026
// ==========================================

// -------------------------
// Load Products
// -------------------------

let allProducts = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// -------------------------
// Save Cart
// -------------------------

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}

// -------------------------
// Cart Counter
// -------------------------

function updateCartCount() {

    const counter = document.getElementById("cart-count");

    if(counter){

        counter.innerText = cart.length;

    }

}

// -------------------------
// Load Products
// -------------------------

function loadProducts(productList = allProducts){

    const container = document.getElementById("product-container");

    if(!container) return;

    container.innerHTML = "";

    productList.forEach(product=>{

        container.innerHTML += createProductCard(product);

    });

}

// -------------------------
// Create Product Card
// -------------------------

function createProductCard(product){

let stockColor = "#28a745";

if(product.stock==="Out of Stock") stockColor="#ff9800";

if(product.stock==="Sold Out") stockColor="#f44336";

return `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<h4>

₹${product.price}

<del>₹${product.oldPrice}</del>

</h4>

<p style="color:green;font-weight:bold;">

${product.offer}

</p>

<p style="color:${stockColor};font-weight:bold;">

${product.stock}

</p>

<button onclick="viewProduct('${product.code}')">

👁 View

</button>

<button onclick="addToCart('${product.code}')">

🛒 Add To Cart

</button>

<button onclick="whatsappOrder('${product.code}')">

📲 Order

</button>

</div>

`;

}

// -------------------------
// Add To Cart
// -------------------------

function addToCart(code){

const product = allProducts.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

cart.push(product);

saveCart();

alert(product.name+" Added To Cart");

}

// -------------------------
// Search Products
// -------------------------

function searchProducts(){

const searchBox = document.getElementById("searchBox");

if(!searchBox) return;

const keyword = searchBox.value.toLowerCase().trim();

const filtered = allProducts.filter(product =>

(product.name || "").toLowerCase().includes(keyword) ||

(product.code || "").toLowerCase().includes(keyword) ||

(product.category || "").toLowerCase().includes(keyword)

);

loadProducts(filtered);

}

// -------------------------
// View Product Details
// -------------------------

function viewProduct(code){

const product = allProducts.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

alert(

"Product : " + product.name +

"\n\nCategory : " + product.category +

"\nColour : " + product.color +

"\nSize : " + product.size +

"\nPrice : ₹" + product.price +

"\nOffer : " + product.offer +

"\nStock : " + product.stock +

"\n\nDescription :\n" + product.description

);

}

// -------------------------
// Category Filter
// -------------------------

function filterCategory(category){

if(category==="All"){

loadProducts();

return;

}

const filtered = allProducts.filter(

p => p.category===category

);

loadProducts(filtered);

}

// -------------------------
// WhatsApp Order
// -------------------------

function whatsappOrder(code){

const product = allProducts.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

const customerName = prompt("Customer Name");

if(!customerName) return;

const customerPhone = prompt("Mobile Number");

if(!customerPhone) return;

const customerAddress = prompt("Delivery Address");

if(!customerAddress) return;

// ਆਪਣਾ WhatsApp Number ਇੱਥੇ ਪਾਓ
const adminNumber = "918872776620";
const message =
"🛒 NEW ORDER\n\n"+
"👤 Name : "+customerName+"\n"+
"📞 Phone : "+customerPhone+"\n"+
"🏠 Address : "+customerAddress+"\n\n"+
"📦 Product : "+product.name+"\n"+
"🆔 Code : "+product.code+"\n"+
"💰 Price : ₹"+product.price+"\n"+
"🎁 Offer : "+product.offer;

window.open(
"https://wa.me/"+adminNumber+
"?text="+encodeURIComponent(message),
"_blank"
);

}

// -------------------------
// Website Start
// -------------------------

document.addEventListener("DOMContentLoaded",()=>{

updateCartCount();

loadProducts();

});

