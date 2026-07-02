// 🔥 ਤੁਹਾਡਾ ਅਸਲੀ ਫਾਇਰਬੇਸ ਕੋਡ ਮੈਂ ਇੱਥੇ ਸੈੱਟ ਕਰ ਦਿੱਤਾ ਹੈ
const firebaseConfig = {
    apiKey: "AIzaSyBaIFzyick8RvsI5ep0y7ZBHaNZZT0aE0k",
    authDomain: "://firebaseapp.com",
    projectId: "apnapinddigital2026-c352c",
    storageBucket: "apnapinddigital2026-c352c.firebasestorage.app",
    messagingSenderId: "1656215258946",
    appId: "1:1656215258946:web:792e0b996f5f146db1ecdb"
};

// Firebase ਚਾਲੂ ਕਰੋ
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let allFirebaseProducts = []; // ਫਾਇਰਬੇਸ ਤੋਂ ਆਉਣ ਵਾਲੇ ਸਾਰੇ ਪ੍ਰੋਡਕਟਸ
let filteredProducts = [];

// 🔄 ਵੈੱਬਸਾਈਟ ਲੋਡ ਹੁੰਦੇ ਹੀ Firebase ਤੋਂ ਰੀਅਲ-ਟਾਈਮ ਡਾਟਾ ਲੈਣਾ
window.onload = function () {
    db.collection('live_products').onSnapshot((snapshot) => {
        allFirebaseProducts = [];
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            allFirebaseProducts.push({
                id: doc.id,
                name: data.name || "Special Product", // ਜੇਕਰ ਨਾਮ ਨਾ ਹੋਵੇ
                price: data.price,
                image: data.image
            });
        });

        // ਜੇਕਰ ਫਾਇਰਬੇਸ ਵਿੱਚ ਕੋਈ ਪ੍ਰੋਡਕਟ ਨਹੀਂ ਹੈ, ਤਾਂ ਤੁਹਾਡੀ ਪੁਰਾਣੀ products.js ਵਾਲੀ ਲਿਸਟ ਦਿਖੇਗੀ
        filteredProducts = allFirebaseProducts.length > 0 ? allFirebaseProducts : (typeof products !== 'undefined' ? products : []);
        displayProducts(filteredProducts);
    }, (error) => {
        console.error("ਡਾਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਸਮੱਸਿਆ: ", error);
    });
};

// 🛒 ਪ੍ਰੋਡਕਟਸ ਨੂੰ ਸਕ੍ਰੀਨ 'ਤੇ ਦਿਖਾਉਣ ਦਾ ਫੰਕਸ਼ਨ (ਤੁਹਾਡਾ ਅਸਲੀ ਡਿਜ਼ਾਈਨ)
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

// 🔍 ਪ੍ਰੋਡਕਟ ਖੋਜਣ (Search) ਦਾ ਫੰਕਸ਼ਨ
function searchProducts() {
    const keyword = document.getElementById("search").value.toLowerCase();
    const sourceProducts = allFirebaseProducts.length > 0 ? allFirebaseProducts : (typeof products !== 'undefined' ? products : []);

    filteredProducts = sourceProducts.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(filteredProducts);
}

// 👁 ਪ੍ਰੋਡਕਟ ਦੇ ਪੇਜ 'ਤੇ ਜਾਣ ਦਾ ਫੰਕਸ਼ਨ
function viewProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product.html";
}

