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

// ==============================
// ADD PRODUCT
// ==============================

function addProduct(){

    const product = {

        id: Date.now(),

        code: document.getElementById("code").value,

        name: document.getElementById("name").value,

        category: document.getElementById("category").value,

        color: document.getElementById("color").value,

        size: document.getElementById("size").value,

        oldPrice: Number(document.getElementById("oldPrice").value),

        price: Number(document.getElementById("price").value),

        offer: document.getElementById("offer").value,

        image: document.getElementById("image").value,

        description: document.getElementById("description").value,

        stock: document.getElementById("stock").value

    };

    products.push(product);

    saveProducts();

    loadProducts();

    alert("✅ Product Added Successfully");

}

// ==============================
// SEARCH PRODUCT
// ==============================

function searchProduct(){

    const code = document.getElementById("searchCode").value.trim();

    const result = document.getElementById("searchResult");

    const product = products.find(item => item.code === code);

    if(!product){

        result.innerHTML =
        "<p style='color:red;font-weight:bold;'>❌ Product Not Found</p>";

        return;

    }

    result.innerHTML = `

    <div style="padding:15px;border:1px solid #ccc;border-radius:10px;">

        <h3>${product.name}</h3>

        <p><b>Code:</b> ${product.code}</p>

        <p><b>Price:</b> ₹${product.price}</p>

        <p><b>Offer:</b> ${product.offer}</p>

        <p><b>Stock:</b> ${product.stock}</p>

    </div>

    `;

}

// ==============================
// LOAD PRODUCT FOR UPDATE
// ==============================

function updateProduct(){

    const code = document.getElementById("searchCode").value.trim();

    const product = products.find(item => item.code === code);

    if(!product){

        alert("❌ Product Not Found");

        return;

    }

    editingProductId = product.id;

    document.getElementById("code").value = product.code;
    document.getElementById("name").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("color").value = product.color;
    document.getElementById("size").value = product.size;
    document.getElementById("oldPrice").value = product.oldPrice;
    document.getElementById("price").value = product.price;
    document.getElementById("offer").value = product.offer;
    document.getElementById("image").value = product.image;
    document.getElementById("description").value = product.description;
    document.getElementById("stock").value = product.stock || "In Stock";

    alert("✅ Product Loaded Successfully");

}

// ==============================
// SAVE UPDATED PRODUCT
// ==============================

function saveUpdatedProduct(){

    if(editingProductId === null){

        alert("ਪਹਿਲਾਂ Product Search ਕਰੋ");

        return;

    }

    const index = products.findIndex(item => item.id === editingProductId);

    if(index === -1){

        alert("❌ Product Not Found");

        return;

    }

    products[index] = {

        id: editingProductId,

        code: document.getElementById("code").value,

        name: document.getElementById("name").value,

        category: document.getElementById("category").value,

        color: document.getElementById("color").value,

        size: document.getElementById("size").value,

        oldPrice: Number(document.getElementById("oldPrice").value),

        price: Number(document.getElementById("price").value),

        offer: document.getElementById("offer").value,

        image: document.getElementById("image").value,

        description: document.getElementById("description").value,

        stock: document.getElementById("stock").value

    };

    saveProducts();

    loadProducts();

    editingProductId = null;

    alert("✅ Product Updated Successfully");

}
