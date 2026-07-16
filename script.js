// ==========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// SCRIPT.JS
// ==========================================

// Products from product.js
let allProducts = JSON.parse(localStorage.getItem("products")) || products;

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ----------------------
// Update Cart Count
// ----------------------
function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.innerText = cart.length;

    }

}

// ----------------------
// Save Cart
// ----------------------
function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}

// ----------------------
// Add To Cart
// ----------------------
function addToCart(productCode){

    const product = allProducts.find(p => p.code === productCode);

    if(!product){

        alert("Product Not Found");

        return;

    }

    cart.push(product);

    saveCart();

    alert(product.name + " Added To Cart");

}

// ----------------------
// Search Products
// ----------------------
function searchProducts(){

    const searchBox = document.getElementById("searchBox");

    if(!searchBox) return;

    const keyword = searchBox.value.toLowerCase();

    const filtered = allProducts.filter(product =>

        product.name.toLowerCase().includes(keyword) ||

        product.code.toLowerCase().includes(keyword) ||

        product.category.toLowerCase().includes(keyword)

    );

    loadProducts(filtered);

}

// ----------------------
// Load Products
// ----------------------
function loadProducts(productList = allProducts){

    const productContainer = document.getElementById("product-container");

    if(!productContainer) return;

    productContainer.innerHTML = "";

    productList.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.offer}</p>

            <h4>₹${product.price}</h4>

            <del>₹${product.oldPrice}</del>

            <br><br>

            <button onclick="addToCart('${product.code}')">

                🛒 Add To Cart

            </button>

        </div>

        `;

    });

}

// ----------------------
// Banner
// ----------------------
function loadBanner(){

    const banner = document.getElementById("banner-image");

    if(!banner) return;

    const savedBanner = localStorage.getItem("banner");

    if(savedBanner){

        banner.src = savedBanner;

    }

}

// ----------------------
// Start Website
// ----------------------
document.addEventListener("DOMContentLoaded", ()=>{

    updateCartCount();

    loadProducts();

    loadBanner();

});
