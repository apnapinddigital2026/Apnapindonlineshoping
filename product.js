// =========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// product.js
// Part 1
// =========================================

let products = [

{
code:"APD1001",
name:"Ladies Suit Pink",
category:"Ladies Wear",
colour:"Pink",
size:"M",
oldPrice:1999,
price:1499,
offer:"25% OFF",
image:"images/ladies/suit1.jpg",
description:"Premium Pink Ladies Suit",
stock:"In Stock"
},

{
code:"APD1002",
name:"Ladies Handbag",
category:"Ladies Handbags",
colour:"Brown",
size:"Free Size",
oldPrice:1499,
price:999,
offer:"33% OFF",
image:"images/ladies-handbags/bag1.jpg",
description:"Stylish Ladies Handbag",
stock:"In Stock"
},

{
code:"APD1003",
name:"Men Shirt",
category:"Gents Wear",
colour:"Blue",
size:"L",
oldPrice:1299,
price:899,
offer:"30% OFF",
image:"images/gents/shirt1.jpg",
description:"Cotton Men Shirt",
stock:"In Stock"
},

{
code:"APD1004",
name:"Kids Dress",
category:"Kids Wear",
colour:"Yellow",
size:"26",
oldPrice:899,
price:599,
offer:"35% OFF",
image:"images/kids/kid1.jpg",
description:"Beautiful Kids Dress",
stock:"In Stock"
},

{
code:"APD1005",
name:"Sports Shoes",
category:"Footwear",
colour:"Black",
size:"8",
oldPrice:2499,
price:1799,
offer:"28% OFF",
image:"images/footwear/shoe1.jpg",
description:"Comfort Sports Shoes",
stock:"In Stock"
},

{
code:"APD1006",
name:"Cooking Oil 1L",
category:"Grocery",
colour:"N/A",
size:"1 Litre",
oldPrice:220,
price:199,
offer:"10% OFF",
image:"images/grocery/oil1.jpg",
description:"Pure Cooking Oil",
stock:"In Stock"
},

{
code:"APD1007",
name:"Rice 5KG",
category:"Grocery",
colour:"N/A",
size:"5 KG",
oldPrice:520,
price:475,
offer:"9% OFF",
image:"images/grocery/rice1.jpg",
description:"Premium Basmati Rice",
stock:"In Stock"
},

{
code:"APD1008",
name:"Bluetooth Speaker",
category:"Electronics",
colour:"Black",
size:"Standard",
oldPrice:2499,
price:1899,
offer:"24% OFF",
image:"images/electronics/speaker1.jpg",
description:"Wireless Bluetooth Speaker",
stock:"In Stock"
},

{
code:"APD1009",
name:"Smart Watch",
category:"Electronics",
colour:"Black",
size:"Free Size",
oldPrice:3999,
price:2999,
offer:"25% OFF",
image:"images/electronics/watch1.jpg",
description:"Smart Fitness Watch",
stock:"In Stock"
},

{
code:"APD1010",
name:"Face Cream",
category:"Cosmetics",
colour:"N/A",
size:"100 ml",
oldPrice:399,
price:299,
offer:"25% OFF",
image:"images/cosmetics/cream1.jpg",
description:"Skin Care Face Cream",
stock:"In Stock"
}

{
code:"APD1011",
name:"Mixer Grinder",
category:"Home & Kitchen",
colour:"White",
size:"750W",
oldPrice:3499,
price:2899,
offer:"17% OFF",
image:"images/home-kitchen/mixer1.jpg",
description:"750W Powerful Mixer Grinder",
stock:"In Stock"
},

{
code:"APD1012",
name:"Pressure Cooker",
category:"Home & Kitchen",
colour:"Silver",
size:"5 Litre",
oldPrice:1999,
price:1599,
offer:"20% OFF",
image:"images/home-kitchen/cooker1.jpg",
description:"Stainless Steel Pressure Cooker",
stock:"In Stock"
},

{
code:"APD1013",
name:"School Notebook",
category:"Stationery",
colour:"Blue",
size:"200 Pages",
oldPrice:120,
price:99,
offer:"18% OFF",
image:"images/stationery/notebook1.jpg",
description:"Premium Quality Notebook",
stock:"In Stock"
},

{
code:"APD1014",
name:"Toy Car",
category:"Toys",
colour:"Red",
size:"Medium",
oldPrice:599,
price:449,
offer:"25% OFF",
image:"images/toys/car1.jpg",
description:"Kids Racing Toy Car",
stock:"In Stock"
},

{
code:"APD1015",
name:"Gold Plated Necklace",
category:"Jewellery",
colour:"Gold",
size:"Free Size",
oldPrice:1499,
price:1199,
offer:"20% OFF",
image:"images/jewellery/necklace1.jpg",
description:"Elegant Gold Plated Necklace",
stock:"In Stock"
},

// =========================================
// END PRODUCTS ARRAY
// =========================================

];

// =========================================
// LOCAL STORAGE
// =========================================

const savedProducts = localStorage.getItem("products");

if(savedProducts){

products = JSON.parse(savedProducts);

}

// =========================================
// SAVE PRODUCTS
// =========================================

function saveProducts(){

localStorage.setItem(

"products",

JSON.stringify(products)

);

}

// =========================================
// GET PRODUCT BY CODE
// =========================================

function getProductByCode(code){

return products.find(

p => p.code === code

);

}

// =========================================
// DELETE PRODUCT
// =========================================

function removeProduct(code){

products = products.filter(

p => p.code !== code

);

saveProducts();

}

// =========================================
// UPDATE PRODUCT
// =========================================

function replaceProduct(updatedProduct){

const index = products.findIndex(

p => p.code === updatedProduct.code

);

if(index !== -1){

products[index] = updatedProduct;

saveProducts();

}

}

// =========================================
// ADD PRODUCT
// =========================================

function insertProduct(product){

products.push(product);

saveProducts();

}

// =========================================
// END OF PRODUCT.JS
// =========================================
