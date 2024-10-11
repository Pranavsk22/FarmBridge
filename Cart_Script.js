function updateCartSummary() {
    let totalItems = 0;
    let totalCost = 0;

    document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        const price = parseInt(item.getAttribute('data-price'));

        totalItems += quantity;
        totalCost += quantity * price;
    });

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-cost').textContent = `₹${totalCost}`;
}

document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const quantity = parseInt(input.value) + 1;
        input.value = quantity;

        const produceItem = button.closest('.cart-item');
        const priceElement = produceItem.querySelector('.price');
        const basePrice = parseInt(produceItem.getAttribute('data-price'));

        priceElement.textContent = `₹${basePrice * quantity}`;
        updateCartSummary();
    });
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        let quantity = parseInt(input.value);
        if (quantity > 0) {
            quantity -= 1;
            input.value = quantity;

            const produceItem = button.closest('.cart-item');
            const priceElement = produceItem.querySelector('.price');
            const basePrice = parseInt(produceItem.getAttribute('data-price'));

            priceElement.textContent = `₹${basePrice * quantity}`;
            updateCartSummary();
        }
    });
});

updateCartSummary(); // Initial update on page load
