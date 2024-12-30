// Add product to cart
function addToCart(productId) {
    fetch("php/cart.php?action=add", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `productId=${productId}&quantity=1`
    })
    .then(response => response.json())
    .then(data => alert(data.message || data.error))
    .catch(error => console.error("Error adding to cart:", error));
}

// View cart items
function loadCart() {
    fetch("php/cart.php?action=view")
        .then(response => response.json())
        .then(cart => {
            const cartContainer = document.getElementById("cart-container");
            cartContainer.innerHTML = ""; // Clear existing items

            cart.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: $${item.total.toFixed(2)}</p>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                `;
                cartContainer.appendChild(cartItem);
            });
        })
        .catch(error => console.error("Error loading cart:", error));
}

// Remove item from cart
function removeFromCart(productId) {
    fetch("php/cart.php?action=remove", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `productId=${productId}`
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || data.error);
        loadCart();
    })
    .catch(error => console.error("Error removing from cart:", error));
}
