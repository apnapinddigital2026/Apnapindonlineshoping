/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   SCRIPT.JS
========================================== */

let allProducts = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let currentCategory = "all";

let searchKeyword = "";

/* ==========================
   LOAD WEBSITE
========================== */

window.onload = function () {

    loadBanner();

    loadProducts();

    updateCartCount();

};

/* ==========================
   LOAD BANNER
========================== */

function loadBanner() {

    const banner = localStorage.getItem("bannerImage");

    const img = document.getElementById("mainBanner");

    if (!img) return;

    if (banner) {

        img.src = banner;

    }

}

/* ==========================
   LOAD PRODUCTS
========================== */

function loadProducts() {

    const container = document.getElementById("productContainer");

    if (!container) return;

    container.innerHTML = "";

    let filtered = [...allProducts];

    if (currentCategory !== "all") {

        filtered = filtered.filter(p => p.category === currentCategory);

    }

    if (searchKeyword !== "") {

        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            p.code.toLowerCase().includes(searchKeyword.toLowerCase())
        );

    }

    filtered.forEach(product => {

        container.innerHTML += createProductCard(product);

    });

}

/* ==========================
   CREATE PRODUCT CARD
========================== */

function createProductCard(product) {

    let stockClass = "stock-green";

    if (product.stock === "Sold Out") {
        stockClass = "stock-red";
    } else if (product.stock === "Out of Stock") {
        stockClass = "stock-orange";
    }

    return `

    <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p><b>Code:</b> ${product.code}</p>

        <p>${product.offer}</p>

        <p>

            <del>₹${product.oldPrice}</del>

            <br>

            <span class="price">₹${product.price}</span>

        </p>

        <p class="${stockClass}">
            ${product.stock || "In Stock"}
        </p>

        <button onclick="addToCart('${product.code}')">
            🛒 Add To Cart
        </button>

        <button onclick="buyNow('${product.code}')">
            ⚡ Buy Now
        </button>

    </div>

    `;

}

/* ==========================
PRODUCT CARD
========================== */

.product-card{

background:#fff;

border-radius:12px;

padding:15px;

box-shadow:0 3px 12px rgba(0,0,0,.15);

text-align:center;

transition:.3s;

}

.product-card:hover{

transform:translateY(-5px);

}

.product-card img{

width:100%;

height:250px;

object-fit:cover;

border-radius:10px;

}

.product-card h3{

margin:10px 0;

font-size:18px;

}

.price{

font-size:22px;

font-weight:bold;

color:#6a1b9a;

}

.product-card button{

width:100%;

margin-top:8px;

padding:10px;

border:none;

border-radius:8px;

background:#6a1b9a;

color:white;

cursor:pointer;

}

.product-card button:hover{

background:#4a148c;

}

/* ==========================
ADD TO CART
========================== */

function addToCart(code){

    const product = allProducts.find(p => p.code === code);

    if(!product) return;

    let existing = cart.find(p => p.code === code);

    if(existing){

        existing.qty += 1;

    }else{

        cart.push({

            ...product,

            qty:1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart.");

}


/* ==========================
BUY NOW
========================== */

function buyNow(code){

    addToCart(code);

    window.location.href="cart.html";

}


/* ==========================
UPDATE CART COUNT
========================== */

function updateCartCount(){

    const counter=document.getElementById("cartCount");

    if(!counter) return;

    let total=0;

    cart.forEach(item=>{

        total+=item.qty;

    });

    counter.innerHTML=total;
}

