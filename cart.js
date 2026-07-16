// ==========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// CART.JS
// ==========================================

// Load Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ---------------------
// Save Cart
// ---------------------

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

// ---------------------
// Load Cart
// ---------------------

function loadCart(){

const container=document.getElementById("cart-container");

const total=document.getElementById("cart-total");

if(!container) return;

container.innerHTML="";

let grandTotal=0;

cart.forEach((product,index)=>{

grandTotal+=Number(product.price);

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<h4>₹${product.price}</h4>

<button onclick="removeCart(${index})">

🗑 Remove

</button>

</div>

`;

});

if(total){

total.innerText=grandTotal;

}

}

// ---------------------
// Remove Product
// ---------------------

function removeCart(index){

cart.splice(index,1);

saveCart();

}

// ---------------------
// WhatsApp Order
// ---------------------

function sendWhatsAppOrder(){

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

if(name==="" || phone==="" || address===""){

alert("Please Fill Customer Details");

return;

}

if(cart.length===0){

alert("Cart is Empty");

return;

}

let message="🛒 APNA PIND DIGITAL ORDER\n\n";

message+="👤 Name : "+name+"\n";

message+="📞 Phone : "+phone+"\n";

message+="🏠 Address : "+address+"\n\n";

let total=0;

cart.forEach((p,i)=>{

message+=(i+1)+". "+p.name+" - ₹"+p.price+"\n";

total+=Number(p.price);

});

message+="\n💰 Total : ₹"+total;

// ਤੁਹਾਡਾ WhatsApp ਨੰਬਰ
const adminNumber="918872776620";

window.open(
"https://wa.me/"+adminNumber+"?text="+encodeURIComponent(message),
"_blank"
);

}

// ---------------------
// Website Start
// ---------------------

document.addEventListener("DOMContentLoaded",()=>{

loadCart();

});
