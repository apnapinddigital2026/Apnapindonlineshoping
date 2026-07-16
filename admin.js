/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   ADMIN PANEL
   Version 1.0
========================================== */

let products = JSON.parse(localStorage.getItem("products")) || [];

let editingProductId = null;

/* ==========================
   SAVE PRODUCTS
========================== */

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

/* ==========================
   LOAD PRODUCT TABLE
========================== */

function loadProducts() {

    const table = document.getElementById("productTable");

    if (!table) return;

    table.innerHTML = "";

    products.forEach(product => {

        table.innerHTML += `
        <tr>

            <td>${product.code}</td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>₹${product.price}</td>

            <td>${product.offer}</td>

            <td>${product.stock}</td>

        </tr>
        `;

    });

}

/* ==========================
   CLEAR FORM
========================== */

function clearForm(){

    document.getElementById("code").value="";
    document.getElementById("name").value="";
    document.getElementById("category").value="";
    document.getElementById("color").value="";
    document.getElementById("size").value="";
    document.getElementById("oldPrice").value="";
    document.getElementById("price").value="";
    document.getElementById("offer").value="";
    document.getElementById("image").value="";
    document.getElementById("description").value="";
    document.getElementById("stock").value="In Stock";

    editingProductId = null;

}

/* ==========================
   START ADMIN
========================== */

window.onload = function(){

    loadProducts();

};
