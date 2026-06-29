// WhatsApp Order Function
function whatsappOrder(product) {

    let phone = "918872776620";

    let message = "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ " + product + " ਆਰਡਰ ਕਰਨਾ ਚਾਹੁੰਦਾ/ਚਾਹੁੰਦੀ ਹਾਂ।";

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

// Product Search
function searchProducts() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.indexOf(input) > -1){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

// Page Loaded
window.onload = function(){

    console.log("Apna Pind Digital Website Loaded Successfully");

};
