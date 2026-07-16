// ==========================================
// APNA PIND DIGITAL ONLINE SHOPPING MALL
// ADMIN.JS
// PART 1
// ==========================================

// -------------------------
// Admin Password
// -------------------------

const ADMIN_PASSWORD = "12345";

// -------------------------
// Load Products
// -------------------------

let products = JSON.parse(localStorage.getItem("products")) || [];

// -------------------------
// Admin Login
// -------------------------

function adminLogin(){

const password = document.getElementById("adminPassword").value;

if(password !== ADMIN_PASSWORD){

alert("Wrong Password");

return;

}

document.getElementById("admin-panel").style.display="block";
document.getElementById("admin-search").style.display="block";
document.getElementById("admin-manage").style.display="block";
document.getElementById("admin-banner").style.display="block";
document.getElementById("admin-list").style.display="block";
document.getElementById("admin-settings").style.display="block";

refreshProducts();

}

// -------------------------
// Save Products
// -------------------------

function saveProducts(){

localStorage.setItem("products",JSON.stringify(products));

refreshProducts();

}

// -------------------------
// Add Product
// -------------------------

function addProduct(){

const product={

code:document.getElementById("code").value.trim(),

name:document.getElementById("name").value.trim(),

category:document.getElementById("category").value.trim(),

colour:document.getElementById("colour").value.trim(),

size:document.getElementById("size").value.trim(),

oldPrice:Number(document.getElementById("oldPrice").value),

price:Number(document.getElementById("price").value),

offer:document.getElementById("offer").value.trim(),

image:document.getElementById("image").value.trim(),

description:document.getElementById("description").value.trim(),

stock:document.getElementById("stock").value

};

if(product.code==="" || product.name===""){

alert("Product Code and Product Name Required");

return;

}

const exists = products.find(p=>p.code===product.code);

if(exists){

alert("Product Code Already Exists");

return;

}

products.push(product);

saveProducts();

clearForm();

alert("Product Added Successfully");

}

// -------------------------
// Refresh Product List
// -------------------------

function refreshProducts(){

const table=document.getElementById("productTable");

if(!table) return;

table.innerHTML="";

products.forEach(product=>{

table.innerHTML+=`

<tr>

<td>${product.code}</td>

<td>${product.name}</td>

<td>${product.category}</td>

<td>₹${product.price}</td>

<td>${product.offer}</td>

<td>${product.stock}</td>

</tr>

`;

});

}

// -------------------------
// Clear Form
// -------------------------

function clearForm(){

document.getElementById("code").value="";
document.getElementById("name").value="";
document.getElementById("category").value="";
document.getElementById("colour").value="";
document.getElementById("size").value="";
document.getElementById("oldPrice").value="";
document.getElementById("price").value="";
document.getElementById("offer").value="";
document.getElementById("image").value="";
document.getElementById("description").value="";
document.getElementById("stock").value="In Stock";

}

// -------------------------
// Search Product
// -------------------------

function searchProduct(){

const code=document.getElementById("searchCode").value.trim();

const product=products.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

document.getElementById("code").value=product.code;
document.getElementById("name").value=product.name;
document.getElementById("category").value=product.category;
document.getElementById("colour").value=product.colour;
document.getElementById("size").value=product.size;
document.getElementById("oldPrice").value=product.oldPrice;
document.getElementById("price").value=product.price;
document.getElementById("offer").value=product.offer;
document.getElementById("image").value=product.image;
document.getElementById("description").value=product.description;
document.getElementById("stock").value=product.stock;

alert("Product Loaded");

}

// -------------------------
// Update Product
// -------------------------

function updateProduct(){

const code=document.getElementById("code").value.trim();

const index=products.findIndex(p=>p.code===code);

if(index===-1){

alert("Product Not Found");

return;

}

products[index]={

code:document.getElementById("code").value.trim(),

name:document.getElementById("name").value.trim(),

category:document.getElementById("category").value.trim(),

colour:document.getElementById("colour").value.trim(),

size:document.getElementById("size").value.trim(),

oldPrice:Number(document.getElementById("oldPrice").value),

price:Number(document.getElementById("price").value),

offer:document.getElementById("offer").value.trim(),

image:document.getElementById("image").value.trim(),

description:document.getElementById("description").value.trim(),

stock:document.getElementById("stock").value

};

saveProducts();

alert("Product Updated Successfully");

}

// -------------------------
// Delete Product
// -------------------------

function deleteProduct(){

const code=document.getElementById("code").value.trim();

const index=products.findIndex(p=>p.code===code);

if(index===-1){

alert("Product Not Found");

return;

}

if(confirm("Delete this product?")){

products.splice(index,1);

saveProducts();

clearForm();

alert("Product Deleted Successfully");

}

}

// -------------------------
// Update Price
// -------------------------

function updatePrice(){

const code=document.getElementById("code").value.trim();

const product=products.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

product.oldPrice=Number(document.getElementById("oldPrice").value);

product.price=Number(document.getElementById("price").value);

saveProducts();

alert("Price Updated");

}

// -------------------------
// Update Offer
// -------------------------

function updateOffer(){

const code=document.getElementById("code").value.trim();

const product=products.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

product.offer=document.getElementById("offer").value;

saveProducts();

alert("Offer Updated");

}

// -------------------------
// Update Stock
// -------------------------

function updateStock(){

const code=document.getElementById("code").value.trim();

const product=products.find(p=>p.code===code);

if(!product){

alert("Product Not Found");

return;

}

product.stock=document.getElementById("stock").value;

saveProducts();

alert("Stock Updated");

}

// -------------------------
// Change Banner
// -------------------------

function changeBanner(){

const path=document.getElementById("bannerPath").value.trim();

if(path===""){

alert("Enter Banner Image Path");

return;

}

localStorage.setItem("banner",path);

alert("Banner Updated Successfully");

}

// -------------------------
// Export Products
// -------------------------

function exportProducts(){

const data=JSON.stringify(products,null,2);

const blob=new Blob([data],{type:"application/json"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="products-backup.json";

link.click();

}

// -------------------------
// Import Products
// -------------------------

function importProducts(){

alert("Import Feature Coming Soon");

}

// -------------------------
// Auto Load
// -------------------------

window.onload=function(){

refreshProducts();

};
