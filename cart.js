/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
CART.JS
PART-1
========================================== */

document.addEventListener("DOMContentLoaded", loadCart);

function loadCart(){

    const container = document.getElementById("cart-items");

    if(!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";

    if(cart.length===0){

        container.innerHTML = "<h2>Your Cart is Empty</h2>";

        return;

    }

    cart.forEach((item,index)=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>${item.code}</p>

            <h4>₹${item.price}</h4>

            <button onclick="removeCart(${index})">

            Remove

            </button>

        </div>

        `;

    });

}
/* ==========================================
CART.JS
PART-2
========================================== */

function removeCart(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

function clearCart(){

    localStorage.removeItem("cart");

    loadCart();

}

function getCartTotal(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item=>{

        total += Number(item.price);

    });

    const totalBox = document.getElementById("cart-total");

    if(totalBox){

        totalBox.innerHTML = "Total : ₹" + total;

    }

}

/* ==========================================
CART.JS
PART-3
========================================== */

function checkout(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        alert("Your Cart is Empty");

        return;

    }

    window.location.href="checkout.html";

}

function orderOnWhatsApp(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        alert("Your Cart is Empty");

        return;

    }

    let message="🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL\n\n";

    let total=0;

    cart.forEach(item=>{

        message +=
`${item.name}
Code : ${item.code}
Price : ₹${item.price}

`;

        total += Number(item.price);

    });

    message += "Total = ₹"+total;

    window.open(

"https://wa.me/918872776620?text="+
encodeURIComponent(message),

"_blank"

    );

}

function payNow(){

    window.location.href="payment.html";

}

document.addEventListener("DOMContentLoaded",()=>{

    loadCart();

    getCartTotal();

});

