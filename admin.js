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

/* ==========================================
LOAD ADMIN PRODUCTS
========================================== */

function loadAdminProducts() {

const list = document.getElementById("adminProductList");

if (!list) return;

list.innerHTML = "";

if (adminProducts.length === 0) {

list.innerHTML = `
<div class="product-card">
<h3>📦 No Products Added</h3>
<p>ਅਜੇ ਤੱਕ ਕੋਈ ਨਵਾਂ Product ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ।</p>
</div>
`;

return;

}

adminProducts.forEach((product, index) => {

list.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.code}</p>

<h4>₹${product.price}</h4>

<del>₹${product.oldPrice}</del>

<p>${product.offer}</p>

<button
class="btn btn-admin"
onclick="editProduct(${index})">

✏️ Edit

</button>

<button
class="btn btn-cart"
onclick="deleteProduct(${index})">

🗑 Delete

</button>

</div>

`;

});

}

/* ==========================================
EDIT PRODUCT
========================================== */

function editProduct(index) {

const product = adminProducts[index];

document.getElementById("productName").value = product.name;
document.getElementById("productCode").value = product.code;
document.getElementById("productCategory").value = product.category;
document.getElementById("productPrice").value = product.price;
document.getElementById("productOldPrice").value = product.oldPrice;
document.getElementById("productOffer").value = product.offer;
document.getElementById("productImage").value = product.image;
document.getElementById("productDescription").value = product.description;

deleteProduct(index);

}

/* ==========================================
DELETE PRODUCT
========================================== */

function deleteProduct(index) {

if (!confirm("ਕੀ ਤੁਸੀਂ ਇਹ Product Delete ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?")) return;

adminProducts.splice(index, 1);

localStorage.setItem(
"adminProducts",
JSON.stringify(adminProducts)
);

loadAdminProducts();

}

/* ==========================================
CLEAR FORM
========================================== */

function clearForm() {

document.getElementById("productName").value = "";
document.getElementById("productCode").value = "";
document.getElementById("productCategory").value = "";
document.getElementById("productPrice").value = "";
document.getElementById("productOldPrice").value = "";
document.getElementById("productOffer").value = "";
document.getElementById("productImage").value = "";
document.getElementById("productDescription").value = "";

}

/* ==========================================
AUTO LOAD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadAdminProducts();

});

/* ==========================================
EXPORT PRODUCTS
========================================== */

function exportProducts() {

    const data = JSON.stringify(adminProducts, null, 2);

    const blob = new Blob([data], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "products-backup.json";

    a.click();

}

/* ==========================================
IMPORT PRODUCTS
========================================== */

function importProducts(event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        adminProducts = JSON.parse(e.target.result);

        localStorage.setItem(
            "adminProducts",
            JSON.stringify(adminProducts)
        );

        loadAdminProducts();

        alert("✅ Products Imported Successfully");

    };

    reader.readAsText(file);

}

/* ==========================================
RESET PRODUCTS
========================================== */

function resetProducts() {

    if (!confirm("ਕੀ ਤੁਸੀਂ ਸਾਰੇ Products Delete ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?"))
        return;

    adminProducts = [];

    localStorage.removeItem("adminProducts");

    loadAdminProducts();

    alert("✅ All Products Deleted");

}

/* ==========================================
VERSION
========================================== */

console.log("Apna Pind Digital Admin Panel V1 Loaded");
