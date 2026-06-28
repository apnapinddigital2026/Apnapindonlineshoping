// ਆਪਣਾ ਪਿੰਡ ਡਿਜਿਟਲ - script.js

// Welcome Message
window.onload = function () {
    console.log("Welcome to ਆਪਣਾ ਪਿੰਡ ਡਿਜਿਟਲ Online Shopping");
};

// Search Function
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// WhatsApp Order
function whatsappOrder(product) {
    let phone = "918872776620";
    let message = "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ " + product + " ਦਾ ਆਰਡਰ ਕਰਨਾ ਚਾਹੁੰਦਾ/ਚਾਹੁੰਦੀ ਹਾਂ।";
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

// Call Button
function callNow() {
    window.location.href = "tel:+91872776620";
}

// UPI Payment
function payNow() {
    window.location.href = "upi://pay?pa=8872776620@axl&pn=Apna Pind Digital&cu=INR";
}
