/* ==========================================
APNA PIND DIGITAL ONLINE SHOPPING MALL
STYLE.CSS
PART-1
========================================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
background:#f5f5f5;
color:#222;
}

a{
text-decoration:none;
color:inherit;
}

img{
max-width:100%;
display:block;
}

/* HEADER */

.header{

display:flex;

justify-content:space-between;

align-items:center;

padding:15px 20px;

background:#006400;

color:#fff;

flex-wrap:wrap;

}

.logo{

display:flex;

align-items:center;

gap:15px;

}

.logo img{

width:70px;

height:70px;

border-radius:50%;

background:#fff;

padding:5px;

}

.logo h2{

font-size:24px;

font-weight:bold;

}

.logo p{

font-size:14px;

color:#ffe082;

}

/* ==========================
SEARCH BOX
========================== */

.search-box{

display:flex;

align-items:center;

margin:10px;

}

.search-box input{

width:260px;

padding:10px;

border:none;

outline:none;

border-radius:5px 0 0 5px;

font-size:15px;

}

.search-box button{

padding:10px 15px;

border:none;

background:#ff9800;

color:#fff;

border-radius:0 5px 5px 0;

cursor:pointer;

}

/* ==========================
HEADER ICONS
========================== */

.header-icons{

display:flex;

gap:20px;

font-size:24px;

}

.header-icons a{

position:relative;

color:#fff;

}

.header-icons span{

position:absolute;

top:-8px;

right:-10px;

background:red;

color:#fff;

font-size:12px;

padding:2px 6px;

border-radius:50%;

}

/* ==========================
NAVIGATION
========================== */

.navbar{

background:#222;

padding:12px;

}

.navbar ul{

display:flex;

justify-content:center;

list-style:none;

gap:25px;

flex-wrap:wrap;

}

.navbar a{

color:#fff;

font-weight:bold;

font-size:16px;

}

.navbar a:hover{

color:#ff9800;

    }

/* ==========================
BANNER
========================== */

.banner{

width:100%;

margin:0;

padding:0;

}

.banner img{

width:100%;

height:350px;

object-fit:cover;

border-radius:8px;

}

/* ==========================
CATEGORIES
========================== */

.categories{

padding:30px 20px;

text-align:center;

}

.categories h2{

font-size:30px;

margin-bottom:20px;

color:#006400;

}

.category-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(180px,1fr));

gap:20px;

}

.category-card{

background:#fff;

padding:15px;

border-radius:10px;

box-shadow:0 2px 10px rgba(0,0,0,.15);

cursor:pointer;

transition:.3s;

}

.category-card:hover{

transform:translateY(-5px);

}

.category-card img{

height:180px;

width:100%;

object-fit:cover;

border-radius:8px;

}

.category-card h3{

margin-top:10px;

font-size:18px;

color:#222;

}

/* ==========================
PRODUCTS
========================== */

.products{

padding:30px 20px;

}

.products h2{

text-align:center;

margin-bottom:25px;

font-size:30px;

color:#006400;

}

.product-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:20px;

}

.product-card{

background:#fff;

border-radius:10px;

padding:15px;

text-align:center;

box-shadow:0 2px 10px rgba(0,0,0,.15);

transition:.3s;

}

.product-card:hover{

transform:translateY(-5px);

}

.product-card img{

height:250px;

width:100%;

object-fit:cover;

border-radius:8px;

}

.product-card h3{

margin-top:10px;

font-size:18px;

}

.product-card h4{

color:#d32f2f;

margin:10px 0;

}

.product-card del{

color:#777;

font-size:14px;

    }

/* ==========================
BUTTONS
========================== */

.product-card button{

width:100%;

padding:10px;

margin-top:8px;

border:none;

border-radius:6px;

font-size:15px;

font-weight:bold;

cursor:pointer;

}

.btn-cart{

background:#006400;

color:#fff;

}

.btn-buy{

background:#ff9800;

color:#fff;

}

/* ==========================
FLOATING BUTTONS
========================== */

.whatsapp-float{

position:fixed;

bottom:20px;

right:20px;

background:#25D366;

color:#fff;

width:60px;

height:60px;

display:flex;

align-items:center;

justify-content:center;

font-size:30px;

border-radius:50%;

z-index:999;

}

.payment-float{

position:fixed;

bottom:90px;

right:20px;

background:#0066ff;

color:#fff;

width:60px;

height:60px;

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

border-radius:50%;

z-index:999;

}

/* ==========================
FOOTER
========================== */

footer{

background:#222;

color:#fff;

padding:30px 20px;

margin-top:40px;

}

.footer-container{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:20px;

}

.footer-container h3{

margin-bottom:10px;

color:#ff9800;

}

.copyright{

text-align:center;

margin-top:20px;

font-size:14px;

}

/* ==========================
MOBILE RESPONSIVE
========================== */

@media(max-width:768px){

.header{

flex-direction:column;

text-align:center;

}

.search-box input{

width:200px;

}

.banner img{

height:200px;

}

.logo img{

width:60px;

height:60px;

}

.product-card img{

height:200px;

}

}

