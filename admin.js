/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   ADMIN.JS
========================================== */

// ----------------------
// Admin Login
// ----------------------

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

// ----------------------
// Login Function
// ----------------------

function adminLogin() {

const username = document.getElementById("adminUser").value.trim();

const password = document.getElementById("adminPass").value.trim();

if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {

alert("✅ Login Successful");

document.getElementById("adminDashboard").style.display = "block";

} else {

alert("❌ Invalid Username or Password");

}

}

// ----------------------
// Save Product (Local)
// ----------------------

function saveProduct() {

const product = {

code: document.getElementById("pCode").value,

name: document.getElementById("pName").value,

category: document.getElementById("pCategory").value,

price: Number(document.getElementById("pPrice").value),

oldPrice: Number(document.getElementById("pOldPrice").value),

offer: document.getElementById("pOffer").value,

colour: document.getElementById("pColour").value,

size: document.getElementById("pSize").value,

stock: document.getElementById("pStock").value,

image: document.getElementById("pImage").value,

description: document.getElementById("pDescription").value

};

// Save in Browser (LocalStorage)
let adminProducts =
JSON.parse(localStorage.getItem("adminProducts")) || [];

adminProducts.push(product);

localStorage.setItem(
"adminProducts",
JSON.stringify(adminProducts)
);

alert("✅ Product Saved Successfully");

clearForm();

}

// ----------------------
// Clear Form
// ----------------------

function clearForm(){

document.getElementById("pCode").value="";

document.getElementById("pName").value="";

document.getElementById("pCategory").value="";

document.getElementById("pPrice").value="";

document.getElementById("pOldPrice").value="";

document.getElementById("pOffer").value="";

document.getElementById("pColour").value="";

document.getElementById("pSize").value="";

document.getElementById("pStock").value="";

document.getElementById("pImage").value="";

document.getElementById("pDescription").value="";

}

// ==========================================
// PRODUCT LIST
// ==========================================

function loadAdminProducts(){

const list=document.getElementById("adminProductList");

if(!list) return;

let adminProducts=
JSON.parse(localStorage.getItem("adminProducts"))||[];

list.innerHTML="";

adminProducts.forEach((item,index)=>{

list.innerHTML+=`

<div class="product-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.category}</p>

<h4>₹${item.price}</h4>

<button
class="btn btn-cart"
onclick="deleteProduct(${index})">

🗑 Delete

</button>

</div>

`;

});

}

// ==========================================
// DELETE PRODUCT
// ==========================================

function deleteProduct(index){

let adminProducts=
JSON.parse(localStorage.getItem("adminProducts"))||[];

adminProducts.splice(index,1);

localStorage.setItem(
"adminProducts",
JSON.stringify(adminProducts)
);

loadAdminProducts();

alert("✅ Product Deleted");

}

// ==========================================
// AUTO START
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

loadAdminProducts();

});
