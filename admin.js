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

        stock: "In Stock"
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
