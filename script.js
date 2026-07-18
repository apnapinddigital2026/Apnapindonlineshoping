/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
SCRIPT.JS
========================================== */

// ==========================
// SEARCH PRODUCTS
// ==========================

function searchProducts() {

let keyword = document
.getElementById("searchBox")
.value
.toLowerCase();

let result = products.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.code.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword)

);

displayProducts(result);

}

// ==========================
// CATEGORY FILTER
// ==========================

function filterCategory(category) {

if (category === "all") {

displayProducts(products);

return;

}

let filtered = products.filter(product =>

product.category === category

);

displayProducts(filtered);

}

// ==========================
// SHOW ALL PRODUCTS
// ==========================

function showAllProducts() {

displayProducts(products);

}

// ==========================
// CART COUNT
// ==========================

function updateCartCount() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

if (cartCount) {

cartCount.innerText = cart.length;

}

}

updateCartCount();

/* ==========================================
WISHLIST
========================================== */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(code){

const product = getProduct(code);

if(!product) return;

if(!wishlist.find(item => item.code === code)){

wishlist.push(product);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert("❤️ Product Added To Wishlist");

}else{

alert("⚠️ Product Already In Wishlist");

}

}

/* ==========================================
IMAGE POPUP
========================================== */

function openImage(image){

let popup = document.createElement("div");

popup.id = "imagePopup";

popup.innerHTML = `

<div class="popup-bg" onclick="closeImage()">

<img src="${image}" class="popup-image">

</div>

`;

document.body.appendChild(popup);

}

function closeImage(){

const popup = document.getElementById("imagePopup");

if(popup){

popup.remove();

}

}

/* ==========================================
PRODUCT PAGE
========================================== */

function openProduct(code){

window.location.href =
`product.html?code=${code}`;

}

/* ==========================================
MOBILE MENU
========================================== */

function toggleMenu(){

const menu = document.querySelector("nav ul");

menu.classList.toggle("showMenu");

}

/* ==========================================
LANGUAGE TOGGLE
========================================== */

let currentLanguage = "en";

function toggleLanguage() {

currentLanguage = currentLanguage === "en" ? "pa" : "en";

alert(
currentLanguage === "pa"
? "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਚੁਣੀ ਗਈ"
: "English Language Selected"
);

}

/* ==========================================
OFFER SLIDER
========================================== */

let bannerImages = [

"images/logo/image_20828faa.png"

];

let bannerIndex = 0;

function changeBanner() {

const banner = document.getElementById("banner-image");

if (!banner) return;

bannerIndex++;

if (bannerIndex >= bannerImages.length) {

bannerIndex = 0;

}

banner.src = bannerImages[bannerIndex];

}

setInterval(changeBanner,5000);

/* ==========================================
PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

const loader = document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

/* ==========================================
AUTO START
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    displayProducts(products);

    updateCartCount();

});


/* ==========================================
BUY NOW
========================================== */

function buyNow(productCode) {

    const product = products.find(p => p.code === productCode);

    if (!product) {
        alert("❌ Product Not Found");
        return;
    }

    // Product Save for Order Page
    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    // Open Order Page
    window.location.href = "order.html";

}


/* ==========================================
ONLINE PAYMENT (UPI)
========================================== */

function payOnline(productCode){

const product = products.find(p => p.code === productCode);

if(!product){
alert("❌ Product Not Found");
return;
}

const amount = product.price;

const upiLink =
`upi://pay?pa=8872776620@axl&pn=Apna Pind Digital Online Shopping Mall&am=${amount}&cu=INR&tn=${product.code}`;

// Try opening UPI
window.location.href = upiLink;

// If UPI App doesn't open
setTimeout(function(){

alert(
"ਜੇ Google Pay / PhonePe ਨਹੀਂ ਖੁੱਲ੍ਹੀ ਤਾਂ QR Code ਨਾਲ Payment ਕਰੋ।"
);

},2000);

}


/* ==========================================
CHECKOUT PAGE
========================================== */

function goToCheckout(productId){

localStorage.setItem("selectedProduct", productId);

window.location.href="checkout.html";

}
