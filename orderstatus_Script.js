// Simulate order status
function updateOrderStatus() {
    const statusText = document.getElementById('status-text');
    
    setTimeout(() => {
        statusText.textContent = 'Order dispatched';
    }, 5000); // Change status after 5 seconds (for simulation)
}

function goBackHome() {
    // Simulate navigation back to home
    alert("Returning to home page...");
}

window.onload = updateOrderStatus;
