/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   CART.JS
========================================== */

// ----------------------
// Load Cart
// ----------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ----------------------
// Save Cart
// ----------------------

function saveCart(){

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

}

// ----------------------
// Show Cart
// ----------------------

function showCart(){

const container = document.getElementById("cart-container");

const total = document.getElementById("cart-total");

if(!container) return;

container.innerHTML = "";

let grandTotal = 0;

if(cart.length===0){

container.innerHTML = `
<div class="product-card">
<h3>Your Cart is Empty</h3>
<p>Add Products to Continue Shopping.</p>
<a href="index.html" class="btn btn-admin">
Continue Shopping
</a>
</div>
`;

if(total) total.innerText = "0";

return;

}

cart.forEach((item,index)=>{

grandTotal += Number(item.price);

container.innerHTML += `

<div class="product-card">

<img
src="${item.image}"
alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.description}</p>

<h4>₹${item.price}</h4>

<del>₹${item.oldPrice}</del>

<br><br>

<button
class="btn btn-cart"
onclick="removeFromCart(${index})">

🗑 Remove

</button>

</div>

`;

});

if(total){

total.innerText = grandTotal;

}  

// ----------------------
// Remove Product
// ----------------------

function removeFromCart(index){

cart.splice(index,1);

saveCart();

showCart();

}

// ----------------------
// WhatsApp Checkout
// ----------------------

function checkoutWhatsApp(){

if(cart.length===0){

alert("Your Cart is Empty");

return;

}

let message = "🛒 Apna Pind Digital Shopping Order%0A%0A";

let total = 0;

cart.forEach((item,i)=>{

message +=
`${i+1}. ${item.name}%0A₹${item.price}%0ACode: ${item.code}%0A%0A`;

total += Number(item.price);

});

message += `Total : ₹${total}`;

window.open(
`https://wa.me/918872776620?text=${message}`,
"_blank"
);

}

// ----------------------
// Auto Start
// ----------------------

updateCartCount();

showCart();

