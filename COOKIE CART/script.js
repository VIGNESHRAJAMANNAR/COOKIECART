let cart = [];

function addToCart(productName, productPrice) {
    // Add product to cart array
    cart.push({ name: productName, price: productPrice });
    
    // Update the cart display
    updateCart();
}

function removeFromCart(productName) {
    // Remove product from cart array
    cart = cart.filter(item => item.name !== productName);
    
    // Update the cart display
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    
    // Clear the previous cart items
    cartItemsList.innerHTML = '';
    
    let totalPrice = 0;
    
    // Add each product in the cart to the list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart('${item.name}')">Remove</button>`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price;
    });
    
    // Update the total price
    totalPriceElement.textContent = totalPrice;
}

function clearCart() {
    cart = [];
    updateCart();
}