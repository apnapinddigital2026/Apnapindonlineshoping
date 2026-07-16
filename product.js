/* ==========================================
   APNA PIND DIGITAL ONLINE SHOPPING MALL
   PRODUCT DATABASE
   Version 2.0
========================================== */

let products = [

    {
        id: 1,
        code: "LS001",
        name: "Ladies Suit",
        category: "ladies",

        color: "Pink",
        size: "Free Size",

        oldPrice: 2499,
        price: 1499,

        offer: "40% OFF",

        image: "images/logo/women-suits/IMG-20260628-WA0013.jpg",

        description: "Latest Ladies Suit",

        stock: "Sold Out"
    }

];


/* ==========================
   Local Storage
========================== */

if (!localStorage.getItem("products")) {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

} else {

    products = JSON.parse(
        localStorage.getItem("products")
    );

}
