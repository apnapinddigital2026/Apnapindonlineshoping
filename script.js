// Products Show

function displayProducts(list){

    const container = document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product=>{

        container.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <div class="card-body">

                <h3>${product.name}</h3>

                <div class="price">₹${product.price}</div>

                <div class="category">${product.category}</div>

                <a class="btn"
                   href="https://wa.me/919607718703?text=ਮੈਨੂੰ ${product.name} ਚਾਹੀਦਾ ਹੈ।"
                   target="_blank">

                   WhatsApp Order

                </a>

            </div>

        </div>

        `;

    });

}

displayProducts(products);


// Search

function searchProducts(){

    const value = document.getElementById("search").value.toLowerCase();

    const filter = products.filter(product=>

        product.name.toLowerCase().includes(value) ||

        product.category.toLowerCase().includes(value)

    );

    displayProducts(filter);

}
