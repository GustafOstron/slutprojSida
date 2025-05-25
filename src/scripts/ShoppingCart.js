// Shopping cart functionality
function addToCart(game) {
    if (JSON.parse(localStorage.getItem('loggedInUser'))) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(game);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }else {
        alert("You must be logged in to purchas games")
    }
}

function removeFromCart(gameId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(game => game.id !== gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh cart display
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, game) => total + game.price, 0);
}

function addToLibrary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let library = JSON.parse(localStorage.getItem('library')) || [];
    
    // Add all games from cart to library
    library = [...library, ...cart];
    
    // Remove duplicates based on game ID
    library = Array.from(new Map(library.map(game => [game.id, game])).values());
    
    // Save updated library
    localStorage.setItem('library', JSON.stringify(library));
    
    // Clear cart
    localStorage.setItem('cart', '[]');
    
    // Update UI
    updateCartCount();
    showShoppingCartPage()

    alert('Games added to your library!');
}

function getShoppingCartHtml() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        return '<p class="w3-center">Your cart is empty</p>';
    }

    let cartHTML = `
        <div class="w3-container">
            ${cart.map(game => `
                <div class="w3-bar w3-card w3-margin-bottom">
                    <div class="game-card-image w3-light-grey" style="background-image: url('${game.imageUrl}')"></div>
                    <div class="w3-bar-item">
                        <h3>${game.title}</h3>
                        <p>${game.genres.join(', ')}</p>
                    </div>
                    <div class="w3-bar-item w3-right w3-center" style="margin-top:25px">
                        <p>${game.price} kr</p>
                        <button onclick="removeFromCart('${game.id}')" class="w3-button w3-red w3-round">Remove</button>
                    </div>
                </div>
            `).join('')}
            
            <div class="w3-container w3-margin-top w3-padding-16">
                <h3>Total: ${calculateTotal()} kr</h3>
                <button onclick="addToLibrary()" class="w3-button w3-green w3-round">Purchase</button>
            </div>
        </div>
    `;
    
    return cartHTML;
}