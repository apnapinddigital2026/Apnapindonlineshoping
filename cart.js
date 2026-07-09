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

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        box.innerHTML += `
        <div class="cart-item">

            <h3>${item.name}</h3>

            <p>
            Code : ${item.code}<br>
            Colour : ${item.color}<br>
            Size : ${item.size}<br>
            ₹${item.price} × ${item.quantity}
            </p>

            <button onclick="increase(${index})">+</button>
            <button onclick="decrease(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>

        </div>
        `;

    });

    box.innerHTML += `<h2>Total : ₹${total}</h2>`;
}

// INCREASE
function increase(i){

    cart[i].quantity++;

    saveCart();

}

// DECREASE
function decrease(i){

    cart[i].quantity--;

    if(cart[i].quantity <= 0){

        cart.splice(i,1);

    }

    saveCart();

}

// REMOVE
function removeItem(i){

    cart.splice(i,1);

    saveCart();

}

// SAVE CART
function saveCart(){

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();

    if(window.opener && window.opener.updateCartCount){

        window.opener.updateCartCount();

    }

}

// WHATSAPP CHECKOUT
function checkout(){

    let msg = "🛒 Order Details\n\n";

    let total = 0;

    cart.forEach(item=>{

        total += item.price * item.quantity;

        msg += `🛍️ ${item.name}

Code : ${item.code}
Color : ${item.color}
Size : ${item.size}
Qty : ${item.quantity}
Price : ₹${item.price}
Total : ₹${item.price * item.quantity}

`;

    });

    msg += `Grand Total = ₹${total}`;

    window.open(
        "https://wa.me/919607718703?text=" + encodeURIComponent(msg),
        "_blank"
    );

}

// Auto Load Cart
document.addEventListener("DOMContentLoaded",function(){

    showCart();

});
