const productsContainer = document.getElementById("products");

function displayProducts(data) {

    productsContainer.innerHTML = "";

    data.forEach(product => {

        productsContainer.innerHTML += `
        <div class="product-card">

            <img src="products/${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <p>${product.category}</p>

            <button onclick="orderOnWhatsapp('${product.name}', '${product.price}')">
                WhatsApp Order
            </button>

        </div>
        `;

    });

}

displayProducts(products);

function searchProducts(){

    const search = document.getElementById("search").value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    displayProducts(filtered);

}

function orderOnWhatsapp(name, price){

    const number = "919607718703";

    const message = `Hello,
I want to order

${name}

Price : ₹${price}`;

    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`);

}
