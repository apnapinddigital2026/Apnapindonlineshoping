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

            <div class="image-box">

    <a href="${product.image}" target="_blank">
        <img src="${product.image}" alt="${product.name}">
    </a>

    <div class="product-code">
        ${product.code}
    </div>

</div>
          <div class="card-body">

    <h3>${product.name}</h3>

    <p class="price">₹${product.price}</p>

    <p class="category">${product.category}</p>

    <button class="cart-btn" onclick="addToCart(${product.id})">
        🛒 Add to Cart
    </button>

   <button
    class="btn"
    onclick="openInquiry(${product.id})">

    ਹੁਣੇ ਪੁੱਛਗਿੱਛ ਕਰੋ / Buy Now

</button>>

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
// ==============================
// ADD TO CART
// ==============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " Cart ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਗਿਆ।");
}

// =============================
// CART COUNT
// =============================

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = document.getElementById("cart-count");

    if(count){

        let total = 0;

        cart.forEach(item=>{
            total += item.qty;
        });

        count.innerHTML = "(" + total + ")";
    }
}

updateCartCount();

function openInquiry(id){

    const product = products.find(p => p.id === id);

    let customerName = prompt("ਆਪਣਾ ਨਾਮ ਲਿਖੋ");

    if(!customerName) return;

    let mobile = prompt("ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਲਿਖੋ");

    if(!mobile) return;

    let msg =
`🛒 ਨਵੀਂ ਪੁੱਛਗਿੱਛ / New Inquiry

━━━━━━━━━━━━━━━━━━

👤 ਨਾਮ / Name
${customerName}

📱 ਮੋਬਾਈਲ / Mobile
${mobile}

🌍 ਰਾਜ / State
Punjab

━━━━━━━━━━━━━━━━━━

🛍️ ਪ੍ਰੋਡਕਟ / Product
${product.name}

🆔 ਕੋਡ / Code
${product.code}

🎨 ਰੰਗ / Colour
${product.color || "-"}

📏 ਸਾਈਜ਼ / Size
${product.size || "-"}

💰 ਕੀਮਤ / Price
₹${product.price}

━━━━━━━━━━━━━━━━━━

ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਪ੍ਰੋਡਕਟ ਦੀ ਜਾਣਕਾਰੀ ਭੇਜੋ।

Please send me the details of this product.

🙏 ਧੰਨਵਾਦ / Thank You`;

    const ok = confirm("ਕੀ ਤੁਸੀਂ ਇਹ ਪੁੱਛਗਿੱਛ WhatsApp 'ਤੇ ਭੇਜਣੀ ਚਾਹੁੰਦੇ ਹੋ?");

    if(ok){

       const phone = "919607718703";

const whatsappURL =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(msg);

window.location.href = whatsappURL;

    }

}
