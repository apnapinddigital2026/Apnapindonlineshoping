let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(id){
  let product = products.find(p => p.id === id);

  let exist = cart.find(item => item.id === id);

  if(exist){
    exist.qty += 1;
  } else {
    cart.push({...product, qty:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added to Cart");
}

// SHOW CART (if cart page use)
function showCart(){
  let box = document.getElementById("cartBox");
  if(!box) return;

  box.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    box.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>₹${item.price} x ${item.qty}</p>

        <button onclick="increase(${index})">+</button>
        <button onclick="decrease(${index})">-</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  box.innerHTML += `<h2>Total: ₹${total}</h2>`;
}

// INCREASE
function increase(i){
  cart[i].qty++;
  saveCart();
}

// DECREASE
function decrease(i){
  cart[i].qty--;
  if(cart[i].qty <= 0){
    cart.splice(i,1);
  }
  saveCart();
}

// REMOVE ITEM
function removeItem(i){
  cart.splice(i,1);
  saveCart();
}

// SAVE CART
function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

// WHATSAPP CHECKOUT
function checkout(){

  let msg = "🛒 Order Details:\n\n";

  let total = 0;

  cart.forEach(item=>{
    msg += `${item.name} x ${item.qty} = ₹${item.price * item.qty}\n`;
    total += item.price * item.qty;
  });

  msg += `\nTotal = ₹${total}`;

  window.open(
    "https://wa.me/919607718703?text=" + encodeURIComponent(msg)
  );
}
// Auto Load Cart
document.addEventListener("DOMContentLoaded", function () {
    showCart();
});
