// script.js

// Load featured products
function loadFeaturedProducts() {
    const productsContainer = document.getElementById("products-container");

    // Fetch products from backend
    fetch("php/get_products.php")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" style="width:100%;height:auto;">
                    <h4>${product.name}</h4>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Add product to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // Placeholder: Add backend interaction here for cart functionality
}

// Initialize the page
document.addEventListener("DOMContentLoaded", loadFeaturedProducts);
