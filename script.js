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

                <a href="#" class="btn">Buy Now</a>

            </div>

        </div>

        `;

    });

}

displayProducts(products);
