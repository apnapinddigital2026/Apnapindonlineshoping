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

/* ==========================
   SEARCH PRODUCT
========================== */

function searchProduct() {

    const code = document
        .getElementById("searchCode")
        .value
        .trim()
        .toUpperCase();

    const product = products.find(p => p.code.toUpperCase() === code);

    if (!product) {

        alert("❌ Product Not Found");

        return;

    }

    editingProductId = product.id;

    document.getElementById("code").value = product.code;
    document.getElementById("name").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("color").value = product.color || "";
    document.getElementById("size").value = product.size || "";
    document.getElementById("oldPrice").value = product.oldPrice || "";
    document.getElementById("price").value = product.price || "";
    document.getElementById("offer").value = product.offer || "";
    document.getElementById("image").value = product.image || "";
    document.getElementById("description").value = product.description || "";
    document.getElementById("stock").value = product.stock || "In Stock";

    alert("✅ Product Loaded Successfully");

}
