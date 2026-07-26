/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
ORDER.JS
========================================== */

document.addEventListener("DOMContentLoaded", loadOrder);

function loadOrder(){

    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if(!product){
        return;
    }

    document.getElementById("productName").innerText = product.name;
    document.getElementById("productCode").innerText = product.code;
    document.getElementById("productPrice").innerText = "₹" + product.price;

}

function sendOrder(){

    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if(!product){

        alert("Product Not Found");
        return;

    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("mobile").value.trim();
    const house = document.getElementById("house").value.trim();
    const street = document.getElementById("street").value.trim();
    const city = document.getElementById("city").value.trim();
    const tehsil = document.getElementById("tehsil").value.trim();
    const district = document.getElementById("district").value.trim();
    const state = document.getElementById("state").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    const qty = parseInt(document.getElementById("qty").value);

    const utr = localStorage.getItem("paymentUTR");

    const total = Number(product.price) * qty;

    if(
        name==="" ||
        phone==="" ||
        house==="" ||
        street==="" ||
        city==="" ||
        tehsil==="" ||
        district==="" ||
        state==="" ||
        pincode===""){

        alert("ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੀ ਜਾਣਕਾਰੀ ਭਰੋ।");
        return;

    }

    if(!utr){

        alert("ਪਹਿਲਾਂ Payment Verify ਕਰੋ।");
        return;

    }

    /* ===== WHATSAPP ORDER MESSAGE ===== */

let message =
`🛒 *APNA PIND DIGITAL ONLINE SHOPPING MALL*

━━━━━━━━━━━━━━━━━━

👤 Customer Name : ${name}

📞 Mobile : ${phone}

🏠 Address

🏡 House : ${house}

🛣️ Street : ${street}

🏘️ Village/City : ${city}

🏢 Tehsil : ${tehsil}

📍 District : ${district}

🌍 State : ${state}

📮 PIN Code : ${pincode}

━━━━━━━━━━━━━━━━━━

🛍️ Product : ${product.name}

🔖 Product Code : ${product.code}

📦 Quantity : ${qty}

💰 Price : ₹${product.price}

🧾 Total Amount : ₹${total}

━━━━━━━━━━━━━━━━━━

💳 Payment Mode : Online UPI

🧾 UPI Transaction ID

${utr}

━━━━━━━━━━━━━━━━━━

🙏 Please Confirm My Order.
`;

/* ===== SEND WHATSAPP ORDER ===== */

window.open(
"https://wa.me/918872776620?text=" + encodeURIComponent(message),
"_blank"
);

/* ===== CLEAR TEMP DATA ===== */

localStorage.removeItem("paymentUTR");
localStorage.removeItem("selectedProduct");

/* ===== SUCCESS MESSAGE ===== */

alert("✅ ਤੁਹਾਡਾ Order Successfully WhatsApp 'ਤੇ ਭੇਜ ਦਿੱਤਾ ਗਿਆ ਹੈ।");

}
