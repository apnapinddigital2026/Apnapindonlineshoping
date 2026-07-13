/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   ADMIN.JS
========================================== */

let products = JSON.parse(localStorage.getItem("products")) || [];

let editingProductId = null;

// ==============================
// SAVE PRODUCTS
// ==============================

function saveProducts(){

    localStorage.setItem("products", JSON.stringify(products));

}

// ==============================
// LOAD PRODUCT TABLE
// ==============================

function loadProducts(){

    const table = document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach(product=>{

        table.innerHTML += `

<tr>

<td>${product.code}</td>

<td>${product.name}</td>

<td>${product.category}</td>

<td>₹${product.price}</td>

<td>${product.offer}</td>

<td>${product.stock || "In Stock"}</td>

</tr>

`;

    });

}
