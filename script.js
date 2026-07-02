const firebaseConfig = {
    apiKey: "AIzaSyBaIFzyick8RvsI5ep0y7ZBHaNZZT0aE0k",
    authDomain: "apnapinddigital2026-c352c.firebaseapp.com",
    projectId: "apnapinddigital2026-c352c",
    storageBucket: "apnapinddigital2026-c352c.firebasestorage.app",
    messagingSenderId: "1656215258946",
    appId: "1:1656215258946:web:792e0b996f5f146db1ecdb"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let allFirebaseProducts = [];
let filteredProducts = [];

window.onload = function () {
    db.collection('live_products').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
        allFirebaseProducts = [];
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            allFirebaseProducts.push({
                id: doc.id,
                name: data.name || "Special Product",
                price: data.price,
                image: data.image
            });
        });

        filteredProducts = allFirebaseProducts.length > 0 ? allFirebaseProducts : (typeof products !== 'undefined' ? products : []);
        displayProducts(filteredProducts);
    }, (error) => {
        console.error("ਡਾਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਸਮੱਸਿਆ: ", error);
    });
};

function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p style='text-align:center; width:100%;'>ਕੋਈ ਪ੍ਰੋਡਕਟ ਨਹੀਂ ਮਿਲਿਆ।</p>";
        return;
    }

    list.forEach((product) => {
        container.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p><strong>₹${product.price}</strong></p>
            <button onclick="viewProduct('${product.id}')">
            👁 View Product
            </button>
        </div>
        `;
    });
}

function searchProducts() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const sourceProducts = allFirebaseProducts.length > 0 ? allFirebaseProducts : (typeof products !== 'undefined' ? products : []);

    filteredProducts = sourceProducts.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(filteredProducts);
}

function viewProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product.html";
}
