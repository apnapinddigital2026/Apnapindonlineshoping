let filteredProducts = [];

window.onload = function () {
    filteredProducts = products;
    displayProducts(filteredProducts);
};

function displayProducts(list) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach((product) => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p><strong>₹${product.price}</strong></p>

            <button onclick="viewProduct(${product.id})">
            👁 View Product
            </button>

        </div>
        `;

    });

}

function searchProducts() {

    const keyword = document
        .getElementById("search")
        .value
        .toLowerCase();

    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(filteredProducts);

}

function viewProduct(id) {

    localStorage.setItem("productId", id);

    window.location.href = "product.html";

}
