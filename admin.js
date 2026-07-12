// Load Products
let products = JSON.parse(localStorage.getItem("products")) || [];

// Save Products
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

// Add Product
function addProduct() {

    let product = {
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

    alert("Product Added Successfully!");

location.reload();
}

// ==============================
// LOAD PRODUCT TABLE
// ==============================

function loadProducts() {

    let table = document.getElementById("productTable");

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

// ==============================
// SEARCH PRODUCT
// ==============================

function searchProduct() {

    let code = document.getElementById("searchCode").value.trim();

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

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

}

// ==============================
// UPDATE PRODUCT
// ==============================

function updateProduct() {

    let code = document.getElementById("code").value;

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

    product.name = document.getElementById("name").value;

    product.category = document.getElementById("category").value;

    product.color = document.getElementById("color").value;

    product.size = document.getElementById("size").value;

    product.oldPrice = Number(document.getElementById("oldPrice").value);

    product.price = Number(document.getElementById("price").value);

    product.offer = document.getElementById("offer").value;

    product.image = document.getElementById("image").value;

    product.description = document.getElementById("description").value;

    saveProducts();

    loadProducts();

    alert("Product Updated Successfully!");

}

// ==============================
// DELETE PRODUCT
// ==============================

function deleteProduct() {

    let code = document.getElementById("code").value;

    products = products.filter(p => p.code !== code);

    saveProducts();

    loadProducts();

    alert("Product Deleted Successfully!");

}
// ==============================
// UPDATE PRODUCT
// ==============================

function updateProduct() {

    let code = document.getElementById("code").value;

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

    product.name = document.getElementById("name").value;

    product.category = document.getElementById("category").value;

    product.color = document.getElementById("color").value;

    product.size = document.getElementById("size").value;

    product.oldPrice = Number(document.getElementById("oldPrice").value);

    product.price = Number(document.getElementById("price").value);

    product.offer = document.getElementById("offer").value;

    product.image = document.getElementById("image").value;

    product.description = document.getElementById("description").value;

    saveProducts();

    loadProducts();

    alert("Product Updated Successfully!");

}

// ==============================
// DELETE PRODUCT
// ==============================

function deleteProduct() {

    let code = document.getElementById("code").value;

    products = products.filter(p => p.code !== code);

    saveProducts();

    loadProducts();

    alert("Product Deleted Successfully!");

}

// ==============================
// UPDATE PRICE
// ==============================

function updatePrice() {

    let code = document.getElementById("code").value;

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

    product.oldPrice = Number(document.getElementById("oldPrice").value);

    product.price = Number(document.getElementById("price").value);

    saveProducts();

    loadProducts();

    alert("Price Updated Successfully!");

}

// ==============================
// UPDATE OFFER
// ==============================

function updateOffer() {

    let code = document.getElementById("code").value;

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

    product.offer = document.getElementById("offer").value;

    saveProducts();

    loadProducts();

    alert("Offer Updated Successfully!");

}

// ==============================
// UPDATE STOCK
// ==============================

function updateStock() {

    let code = document.getElementById("code").value;

    let product = products.find(p => p.code === code);

    if (!product) {

        alert("Product Not Found");

        return;

    }

    product.stock = document.getElementById("stock").value;

    saveProducts();

    loadProducts();

    alert("Stock Updated Successfully!");

}

// ==============================
// CHANGE BANNER
// ==============================

function changeBanner() {

    let banner = document.getElementById("bannerImage").value;

    localStorage.setItem("bannerImage", banner);

    alert("Banner Updated Successfully!");

}

// ==============================
// REFRESH PRODUCT LIST
// ==============================

function refreshProducts() {

    products = JSON.parse(localStorage.getItem("products")) || [];

    loadProducts();

}

// ==============================
// EXPORT PRODUCTS
// ==============================

function exportProducts() {

    const data = JSON.stringify(products, null, 2);

    const blob = new Blob([data], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "products.json";

    a.click();

}

// ==============================
// IMPORT PRODUCTS
// ==============================

function importProducts() {

    alert("Import Feature Coming Soon");

}

// ==============================
// PAGE LOAD
// ==============================

window.onload = function () {

    loadProducts();

};

// ==============================
// SEARCH PRODUCT
// ==============================

function searchProduct() {

    const code = document.getElementById("searchCode").value.trim();

    const result = document.getElementById("searchResult");

    const product = products.find(item => item.code === code);

    if (!product) {

        result.innerHTML = `
        <p style="color:red;font-weight:bold;">
        ❌ Product Not Found
        </p>
        `;

        return;
    }

    result.innerHTML = `
    <div style="padding:15px;border:1px solid #ddd;border-radius:10px;margin-top:10px;">

        <h3>${product.name}</h3>

        <p><b>Code:</b> ${product.code}</p>

        <p><b>Category:</b> ${product.category}</p>

        <p><b>Price:</b> ₹${product.price}</p>

        <p><b>Offer:</b> ${product.offer}</p>

        <p><b>Stock:</b> ${product.stock}</p>

    </div>
    `;
}

// ==============================
// UPDATE PRODUCT
// ==============================

function updateProduct(){

    const code = document.getElementById("searchCode").value.trim();

    const product = products.find(item => item.code === code);

    if(!product){
        alert("❌ Product Not Found");
        return;
    }

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
// UPDATE PRODUCT
// ==============================

let editingProductId = null;

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

    alert("✅ Product Loaded. ਹੁਣ ਜਾਣਕਾਰੀ ਬਦਲੋ ਅਤੇ Save Update ਦਬਾਓ।");
}

// ==============================
// SAVE UPDATED PRODUCT
// ==============================

function saveUpdatedProduct(){

    if(editingProductId === null){

        alert("ਪਹਿਲਾਂ Product Search ਕਰੋ।");

        return;

    }

    const index = products.findIndex(item => item.id === editingProductId);

    if(index === -1){

        alert("Product ਨਹੀਂ ਮਿਲਿਆ।");

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

    alert("✅ Product Successfully Updated!");

}
