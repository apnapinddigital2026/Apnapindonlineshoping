// ===============================
// ORDER PAGE
// ===============================

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const product = getProduct(code);

// ===============================
// SHOW PRODUCT
// ===============================

if (product) {

document.getElementById("productName").innerHTML =
"📦 Product : " + product.name;

document.getElementById("productCode").innerHTML =
"🆔 Product Code : " + product.code;

document.getElementById("productPrice").innerHTML =
"💰 Price : ₹" + product.price;

}

// ===============================
// ORDER ID
// ===============================

function createOrderID() {
return "APD" + Date.now();
}

// ===============================
// SEND ORDER
// ===============================

function sendOrder() {

if (!product) {
alert("Product Not Found");
return;
}

const customerName = document.getElementById("customerName").value.trim();
const mobile = document.getElementById("mobile").value.trim();
const house = document.getElementById("house").value.trim();
const street = document.getElementById("street").value.trim();
const village = document.getElementById("village").value.trim();
const tehsil = document.getElementById("tehsil").value.trim();
const district = document.getElementById("district").value.trim();
const state = document.getElementById("state").value.trim();
const pincode = document.getElementById("pincode").value.trim();
const landmark = document.getElementById("landmark").value.trim();
const qty = document.getElementById("qty").value;
const payment = document.getElementById("payment").value;
const utr = document.getElementById("utr").value.trim();

if(customerName==="" || mobile===""){
alert("ਕਿਰਪਾ ਕਰਕੇ ਨਾਮ ਅਤੇ ਮੋਬਾਈਲ ਨੰਬਰ ਭਰੋ");
return;
}

const orderID = createOrderID();

let message =
`🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL

━━━━━━━━━━━━━━
📦 ORDER REQUEST
━━━━━━━━━━━━━━

Order ID : ${orderID}

Product Code : ${product.code}
Product Name : ${product.name}
Price : ₹${product.price}

━━━━━━━━━━━━━━
👤 CUSTOMER DETAILS
━━━━━━━━━━━━━━

Name : ${customerName}
Mobile : ${mobile}

House : ${house}
Street : ${street}
Village : ${village}
Tehsil : ${tehsil}
District : ${district}
State : ${state}
PIN : ${pincode}
Landmark : ${landmark}

Quantity : ${qty}

Payment : ${payment}

UTR : ${utr}
`;

const whatsappURL =
"https://wa.me/918872776620?text=" + encodeURIComponent(message);

window.open(whatsappURL, "_blank");

}
