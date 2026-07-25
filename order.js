/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
ORDER.JS
========================================== */

document.addEventListener("DOMContentLoaded", loadOrder);

function loadOrder(){

    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if(!product) return;

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
    const qty = document.getElementById("qty").value;
    const utr = document.getElementById("utr").value.trim();

    if(name==="" || phone==="" || house==="" || street==="" || city==="" || tehsil==="" || district==="" || state==="" || pincode===""){

        alert("ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੀ ਜਾਣਕਾਰੀ ਭਰੋ।");
        return;

    }

    if(utr===""){

        alert("ਪਹਿਲਾਂ Online UPI Payment ਕਰੋ ਅਤੇ UPI Transaction ID ਭਰੋ।");
        return;

    }

    let message =
`🛒 *ਆਪਣਾ ਪਿੰਡ ਡਿਜ਼ਿਟਲ Online Shopping Mall*

👤 ਨਾਮ / Name : ${name}

📞 ਮੋਬਾਈਲ / Mobile : ${phone}

🏠 ਪਤਾ / Address :

ਮਕਾਨ : ${house}

ਗਲੀ : ${street}

ਪਿੰਡ : ${city}

ਤਹਿਸੀਲ : ${tehsil}

ਜ਼ਿਲ੍ਹਾ : ${district}

ਰਾਜ : ${state}

PIN : ${pincode}

🛍️ ਪ੍ਰੋਡਕਟ : ${product.name}

🔖 ਕੋਡ : ${product.code}

📦 ਮਾਤਰਾ : ${qty}

💰 ਕੀਮਤ : ₹${product.price}

💳 Payment : Online UPI

🧾 UPI Transaction ID :

${utr}`;

    window.open(
"https://wa.me/918872776620?text="+encodeURIComponent(message),
"_blank"
    );

}
