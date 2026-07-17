/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
ADMIN.JS
========================================== */

// ==========================
// ADMIN PASSWORD
// ==========================

const ADMIN_PASSWORD = "ApnaPind2026";

// ==========================
// LOGIN
// ==========================

function loginAdmin() {

const password = document
.getElementById("adminPassword")
.value;

if (password === ADMIN_PASSWORD) {

document.getElementById("adminArea").style.display = "block";

document.getElementById("savedProducts").style.display = "block";

loadAdminProducts();

alert("✅ Login Successful");

} else {

alert("❌ Wrong Password");

}

}

// ==========================
// LOCAL PRODUCTS
// ==========================

let adminProducts =
JSON.parse(localStorage.getItem("adminProducts")) || [];

// ==========================
// SAVE PRODUCT
// ==========================

function saveProduct() {

const product = {

name: document.getElementById("productName").value,

code: document.getElementById("productCode").value,

category: document.getElementById("productCategory").value,

price: Number(document.getElementById("productPrice").value),

oldPrice: Number(document.getElementById("productOldPrice").value),

offer: document.getElementById("productOffer").value,

image: document.getElementById("productImage").value,

description: document.getElementById("productDescription").value,

stock: "In Stock",

colour: "Multi Colour",

size: "Free Size"

};

adminProducts.push(product);

localStorage.setItem(
"adminProducts",
JSON.stringify(adminProducts)
);

alert("✅ Product Saved");

clearForm();

loadAdminProducts();

}

