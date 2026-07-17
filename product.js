/* =====================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   PRODUCT.JS
====================================== */

const products = [

/* ===============================
   WOMEN SUITS
=============================== */

{
id:1,
code:"APS001",
name:"Ladies Suit 1",
category:"women-suits",
price:1299,
oldPrice:1699,
offer:"24% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0013.jpg",
description:"Beautiful Punjabi Ladies Suit"
},

{
id:2,
code:"APS002",
name:"Ladies Suit 2",
category:"women-suits",
price:1399,
oldPrice:1799,
offer:"22% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0025.jpg",
description:"Premium Punjabi Suit"
},

{
id:3,
code:"APS003",
name:"Ladies Suit 3",
category:"women-suits",
price:1499,
oldPrice:1899,
offer:"21% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0030.jpg",
description:"Designer Ladies Suit"
},

{
id:4,
code:"APS004",
name:"Ladies Suit 4",
category:"women-suits",
price:1599,
oldPrice:1999,
offer:"20% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0033.jpg",
description:"Punjabi Cotton Suit"
},

{
id:5,
code:"APS005",
name:"Ladies Suit 5",
category:"women-suits",
price:1699,
oldPrice:2199,
offer:"23% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0035.jpg",
description:"Printed Punjabi Suit"
},

{
id:6,
code:"APS006",
name:"Ladies Suit 6",
category:"women-suits",
price:1799,
oldPrice:2299,
offer:"22% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0036.jpg",
description:"Premium Designer Suit"
},

{
id:7,
code:"APS007",
name:"Ladies Suit 7",
category:"women-suits",
price:1899,
oldPrice:2399,
offer:"21% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0037.jpg",
description:"Ladies Wear Collection"
},

{
id:8,
code:"APS008",
name:"Ladies Suit 8",
category:"women-suits",
price:1999,
oldPrice:2499,
offer:"20% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Free Size",
image:"images/logo/women-suits/IMG-20260628-WA0038.jpg",
description:"Stylish Punjabi Suit"
},

/* ===============================
   WOMEN HANDBAGS
=============================== */

,{
id:9,
code:"APH001",
name:"Ladies Handbag 1",
category:"women-handbags",
price:799,
oldPrice:1099,
offer:"27% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Standard",
image:"images/logo/women-handbags/IMG-20260628-WA0001.jpg",
description:"Premium Ladies Handbag"
},

{
id:10,
code:"APH002",
name:"Ladies Handbag 2",
category:"women-handbags",
price:899,
oldPrice:1199,
offer:"25% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Standard",
image:"images/logo/women-handbags/IMG-20260628-WA0002.jpg",
description:"Stylish Handbag"
},

{
id:11,
code:"APH003",
name:"Ladies Handbag 3",
category:"women-handbags",
price:999,
oldPrice:1299,
offer:"23% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Standard",
image:"images/logo/women-handbags/IMG-20260628-WA0003.jpg",
description:"Fashion Handbag"
},

{
id:12,
code:"APH004",
name:"Ladies Handbag 4",
category:"women-handbags",
price:1099,
oldPrice:1499,
offer:"27% OFF",
stock:"In Stock",
colour:"Mixed",
size:"Standard",
image:"images/logo/women-handbags/IMG-20260628-WA0004.jpg",
description:"Ladies Shoulder Bag"
}

  /* ===============================
   MEN WEAR
=============================== */

,{
id:13,
code:"APM001",
name:"Men Wear 1",
category:"men",
price:999,
oldPrice:1399,
offer:"29% OFF",
stock:"In Stock",
colour:"Mixed",
size:"M",
image:"images/logo/men/IMG-20260628-WA0026.jpg",
description:"Premium Men's Wear"
},

{
id:14,
code:"APM002",
name:"Men Wear 2",
category:"men",
price:1099,
oldPrice:1499,
offer:"27% OFF",
stock:"In Stock",
colour:"Mixed",
size:"L",
image:"images/logo/men/IMG-20260628-WA0027.jpg",
description:"Stylish Men's Shirt"
},

{
id:15,
code:"APM003",
name:"Men Wear 3",
category:"men",
price:1199,
oldPrice:1599,
offer:"25% OFF",
stock:"In Stock",
colour:"Mixed",
size:"XL",
image:"images/logo/men/IMG-20260628-WA0028.jpg",
description:"Cotton Men's Wear"
},

{
id:16,
code:"APM004",
name:"Men Wear 4",
category:"men",
price:1299,
oldPrice:1699,
offer:"24% OFF",
stock:"In Stock",
colour:"Mixed",
size:"XXL",
image:"images/logo/men/IMG-20260628-WA0029.jpg",
description:"Casual Men's Collection"
}

/* ===============================
   END PRODUCT LIST
=============================== */

];

/* ===============================
   CATEGORY FILTER
=============================== */

function getProductsByCategory(category){

return products.filter(product=>product.category===category);

}

/* ===============================
   SEARCH PRODUCT
=============================== */

function searchProduct(keyword){

keyword=keyword.toLowerCase();

return products.filter(product=>

product.name.toLowerCase().includes(keyword) ||

product.code.toLowerCase().includes(keyword) ||

product.description.toLowerCase().includes(keyword)

);

}

/* ===============================
   GET PRODUCT
=============================== */

function getProduct(code){

return products.find(product=>product.code===code);

}

/* ===============================
   EXPORT
=============================== */

if(typeof module!=="undefined"){

module.exports=products;

}  
];
