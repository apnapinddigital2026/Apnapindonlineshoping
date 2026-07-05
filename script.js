/* ======================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   SCRIPT.JS - PART 1
====================================== */

const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search");

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product=>{

        productContainer.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <div class="card-body">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p class="category">${product.category}</p>

                <button class="cart-btn" onclick="addToCart(${product.id})">
    🛒 Add to Cart
</button>
<a
    href="https://wa.me/919607718703?text=Hello,%20I%20want%20to%20buy%20${product.name}"
    target="_blank"
    class="btn">
    Buy Now
</a>

            </div>

        </div>

        `;

    });

}

displayProducts(products);
// Search Products
searchInput.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);

});
// Category Filter
const categoryButtons = document.querySelectorAll(".category-grid button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        if (category === "all") {

            displayProducts(products);

        } else {

            const filteredProducts = products.filter(product => product.category === category);

            displayProducts(filteredProducts);

        }

    });

});
