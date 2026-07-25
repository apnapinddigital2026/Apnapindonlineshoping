/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
SCRIPT.JS
PART-1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof products !== "undefined") {
        displayProducts(products);
    }

    updateCartCount();

});

/* ==========================
DISPLAY PRODUCTS
========================== */

let currentPage = 1;
const productsPerPage = 12;

function displayProducts(productList){

    const container = document.getElementById("product-container");
    const pagination = document.getElementById("pagination");

    if(!container) return;

    container.innerHTML = "";

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const pageProducts = productList.slice(start, end);

    pageProducts.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}"
            onclick="openProduct('${product.code}')"
            loading="lazy">

            <h3 onclick="openProduct('${product.code}')">
            ${product.name}
            </h3>

            <p>${product.code}</p>

            <h4>₹${product.price}</h4>

            <del>₹${product.oldPrice}</del>

            <p>${product.offer}</p>

            <button onclick="addToCart('${product.code}')">
            Add To Cart
            </button>

            <button class="btn-buy"
            onclick="buyNow('${product.code}')">
            Buy Now
            </button>

        </div>

        `;

    });

    if(pagination){

        const totalPages = Math.ceil(productList.length / productsPerPage);

        pagination.innerHTML = "";

        if(currentPage > 1){

            pagination.innerHTML += `<button onclick="changePage(${currentPage-1})">⬅ Previous</button>`;

        }

        pagination.innerHTML += `<span> Page ${currentPage} / ${totalPages} </span>`;

        if(currentPage < totalPages){

            pagination.innerHTML += `<button onclick="changePage(${currentPage+1})">Next ➡</button>`;

        }

    }

}

function changePage(page){

    currentPage = page;

    displayProducts(products);

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

/* ==========================
SEARCH PRODUCTS
========================== */

function searchProducts(){

    const keyword = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(keyword) ||

        product.code.toLowerCase().includes(keyword)

    );

    displayProducts(filtered);

}

/* ==========================
CATEGORY FILTER
========================== */

function filterCategory(category){

    const filtered = products.filter(product =>

        product.category === category

    );

    displayProducts(filtered);

}

/* ==========================
SHOW ALL PRODUCTS
========================== */

function showAllProducts(){

    displayProducts(products);

}

/* ==========================
ADD TO CART
========================== */

function addToCart(code){

    const product = products.find(p => p.code === code);

    if(!product){

        alert("Product Not Found");

        return;

    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " Added To Cart");

}

/* ==========================
UPDATE CART COUNT
========================== */

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const count = document.getElementById("cart-count");

    if(count){

        count.innerText = cart.length;

    }

}

/* ==========================
BUY NOW
========================== */

function buyNow(code){

    const product = products.find(p => p.code === code);

    if(!product){

        alert("Product Not Found");

        return;

    }

    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    window.location.href = "order.html";

}

/* ==========================
OPEN PRODUCT PAGE
========================== */

function openProduct(code){

    window.location.href =
    "product.html?code=" + code;

}

/* ==========================
WHATSAPP ORDER
========================== */

function whatsappOrder(product){

    let message =

`🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL

Product : ${product.name}

Code : ${product.code}

Price : ₹${product.price}`;

    window.open(

    "https://wa.me/918872776620?text=" +
    encodeURIComponent(message),

    "_blank"

    );

}

/* ==========================
HIDE LOADER
========================== */

window.onload = function () {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

};
