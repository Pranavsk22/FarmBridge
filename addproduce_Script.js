document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const quantity = parseInt(input.value) + 1;
        input.value = quantity;

        const produceItem = button.closest('.produce-item');
        const priceElement = produceItem.querySelector('.price');
        const basePrice = parseInt(produceItem.getAttribute('data-price'));

        priceElement.textContent = `₹${basePrice * quantity}`;
    });
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        let quantity = parseInt(input.value);
        if (quantity > 0) {
            quantity -= 1;
            input.value = quantity;
            
            const produceItem = button.closest('.produce-item');
            const priceElement = produceItem.querySelector('.price');
            const basePrice = parseInt(produceItem.getAttribute('data-price'));

            priceElement.textContent = `₹${basePrice * quantity}`;
        }
    });
});
