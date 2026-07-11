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
