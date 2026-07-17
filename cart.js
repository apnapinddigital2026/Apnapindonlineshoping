/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
CART.JS
========================================== */

// ==========================
// LOAD CART
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==========================
// SHOW CART
// ==========================

function showCart() {

const cartBox = document.getElementById("cartItems");
const totalBox = document.getElementById("cartTotal");

if (!cartBox) return;

cartBox.innerHTML = "";

let total = 0;

if (cart.length === 0) {

cartBox.innerHTML = `
<div class="product-card">
<h3>🛒 Cart Empty</h3>
<p>ਤੁਹਾਡਾ ਕਾਰਟ ਖਾਲੀ ਹੈ।</p>
<a href="index.html" class="btn btn-buy">
Continue Shopping
</a>
</div>
`;

if (totalBox) totalBox.innerHTML = "Total : ₹0";

return;

}

cart.forEach((item, index) => {

total += item.price;

cartBox.innerHTML += `

<div class="product-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.code}</p>

<h4>₹${item.price}</h4>

<button class="btn btn-cart"
onclick="removeItem(${index})">

❌ Remove

</button>

</div>

`;

});

if (totalBox) {

totalBox.innerHTML = `Total : ₹${total}`;

}

}

/* ==========================================
REMOVE ITEM
========================================== */

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

showCart();

updateCartCount();

}

/* ==========================================
CLEAR CART
========================================== */

function clearCart(){

if(confirm("ਕੀ ਤੁਸੀਂ ਪੂਰਾ Cart ਖਾਲੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?")){

cart=[];

localStorage.removeItem("cart");

showCart();

updateCartCount();

}

}

/* ==========================================
WHATSAPP CHECKOUT
========================================== */

function checkout(){

if(cart.length===0){

alert("🛒 ਤੁਹਾਡਾ Cart ਖਾਲੀ ਹੈ।");

return;

}

let message="🛒 Apna Pind Digital Shopping Mall\n\n";

let total=0;

cart.forEach((item,index)=>{

message += `${index+1}. ${item.name}\n`;

message += `Code : ${item.code}\n`;

message += `Price : ₹${item.price}\n\n`;

total += item.price;

});

message += `💰 Total = ₹${total}`;

window.open(

`https://wa.me/918872776620?text=${encodeURIComponent(message)}`,

"_blank"

);

}

/* ==========================================
AUTO START
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

showCart();

updateCartCount();

});
