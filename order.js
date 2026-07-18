// ===============================
// ORDER PAGE
// ===============================

const params = new URLSearchParams(window.location.search);

const code = params.get("code");

const product = getProduct(code);

// ===============================
// SHOW PRODUCT
// ===============================

if(product){

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

function createOrderID(){

return "APD" + Date.now();

}

// ===============================
// SEND ORDER TO WHATSAPP
// ===============================

function sendOrder() {

const orderID = createOrderID();

const customerName = document.getElementById("customerName").value;
const mobile = document.getElementById("mobile").value;
const house = document.getElementById("house").value;
const street = document.getElementById("street").value;
const village = document.getElementById("village").value;
const tehsil = document.getElementById("tehsil").value;
const district = document.getElementById("district").value;
const state = document.getElementById("state").value;
const pincode = document.getElementById("pincode").value;
const landmark = document.getElementById("landmark").value;
const qty = document.getElementById("qty").value;
const payment = document.getElementById("payment").value;
const utr = document.getElementById("utr").value;

let message =
`🛒 APNA PIND DIGITAL ONLINE SHOPPING MALL

━━━━━━━━━━━━━━━━━━
📦 ORDER REQUEST
━━━━━━━━━━━━━━━━━━

Order ID : ${orderID}

Product Code : ${product.code}
Product Name : ${product.name}
Price : ₹${product.price}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Full Name : ${customerName}

Mobile Number : ${mobile}

House No : ${house}

Street / Mohalla : ${street}

Village / City : ${village}

Tehsil : ${tehsil}

District : ${district}

State : ${state}

PIN Code : ${pincode}

Landmark : ${landmark}

Quantity : ${qty}

Payment Method : ${payment}

UPI Transaction ID : ${utr}
`;

window.open(
`https://wa.me/918872776620?text=${encodeURIComponent(message)}`,
"_blank"
);

}
