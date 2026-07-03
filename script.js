const container = document.getElementById("productList");
const search = document.getElementById("search");

// PRODUCTS LOAD (from product.js)
function showProducts(data){
  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>

        <button onclick="buyNow('${p.name}', ${p.price})">
          Buy Now
        </button>
      </div>
    `;
  });
}

// initial load
showProducts(products);

---

# 🚀 STEP 2: SEARCH FUNCTION

search.addEventListener("input", function(){
  let value = this.value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  showProducts(filtered);
});

---

# 🚀 STEP 3: CATEGORY FILTER

function filterCategory(cat){

  if(cat === "All"){
    showProducts(products);
    return;
  }

  let filtered = products.filter(p =>
    p.category === cat
  );

  showProducts(filtered);
}

---

# 🚀 STEP 4: WHATSAPP ORDER BUTTON

function buyNow(name, price){

  let message = `Hello, I want to buy: ${name} (₹${price})`;

  let url = "https://wa.me/919607718703?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
