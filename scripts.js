document.addEventListener('DOMContentLoaded', () => {
    // Calculate percentage off initially
    const price = parseFloat(document.getElementById('price').innerText.replace('$', ''));
    const comparePrice = parseFloat(document.getElementById('compare-price').innerText.replace('$', ''));
    const percentageOff = ((comparePrice - price) / comparePrice * 100).toFixed(2);
    document.getElementById('percentage-off').innerText = `${percentageOff}% Off`;

    // Add event listeners to thumbnails
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updatePrices(quantity);
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updatePrices(quantity);
}

function addToCart() {
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    
    const cartMessage = `Embrace Sideboard with Color ${capitalize(selectedColor)} and Size ${capitalize(selectedSize)} added to cart`;
    document.getElementById('cart-message').textContent = cartMessage;
    document.getElementById('cart-message').classList.remove('hidden');

    // Update the displayed prices based on the current quantity
    const quantity = parseInt(document.getElementById('quantity').value);
    updatePrices(quantity);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updatePrices(quantity) {
    const basePrice = 12999.00;
    const newPrice = basePrice * quantity;
    const newComparePrice = 19999.00 * quantity; // Update compare price based on quantity (if applicable)

    document.getElementById('price').innerText = `$${newPrice.toFixed(2)}`;
    document.getElementById('compare-price').innerText = `$${newComparePrice.toFixed(2)}`;
}
