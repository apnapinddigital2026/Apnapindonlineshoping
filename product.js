const productId = localStorage.getItem("productId");

const product = products.find(p => p.id == productId);

if (product) {

document.getElementById("productName").innerText = product.name;

document.getElementById("productPrice").innerText = "₹" + product.price;

document.getElementById("productCategory").innerText = product.category;

document.getElementById("mainImage").src = product.images[0];

const thumbs = document.getElementById("thumbnailContainer");

product.images.forEach(function(img){

const image = document.createElement("img");

image.src = img;

image.className = "thumb";

image.onclick = function(){

document.getElementById("mainImage").src = img;

};

thumbs.appendChild(image);

});

document.querySelector(".whatsapp-btn").onclick = function(){

const msg =
`Hello, I want to order ${product.name} Price ₹${product.price}`;

window.open(
`https://wa.me/919607718703?text=${encodeURIComponent(msg)}`
);

};

}
