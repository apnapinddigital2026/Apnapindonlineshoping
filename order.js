/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
ORDER.JS
PART-1
========================================== */

document.addEventListener("DOMContentLoaded", loadOrder);

function loadOrder(){

    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if(!product) return;

    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-code").innerText = product.code;
    document.getElementById("product-price").innerText = "₹" + product.price;
    document.getElementById("product-image").src = product.image;

}

/* ==========================================
ORDER.JS
PART-2
========================================== */

function submitOrder(){

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;

    if(name==="" || phone==="" || address===""){

        alert("Please Fill All Details");

        return;

    }

    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    let message =
`🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL

Customer : ${name}

Phone : ${phone}

Address : ${address}

Product : ${product.name}

Code : ${product.code}

Price : ₹${product.price}`;

    window.open(
"https://wa.me/918872776620?text="+
encodeURIComponent(message),
"_blank"
    );

    alert("Order Submitted Successfully");

}

function paymentCompleted(){

    alert("Payment Verified Successfully");

    window.location.href="index.html";

}
