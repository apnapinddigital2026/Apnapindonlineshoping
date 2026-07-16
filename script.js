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
