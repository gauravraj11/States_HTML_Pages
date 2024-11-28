// Fetch the count from localStorage or initialize it to 0
let sharedCount = parseInt(localStorage.getItem('sharedCount')) || 0;

// Function to update all boxes with the current shared count
function updateCounts() {
    const countElements = document.querySelectorAll('.count');
    countElements.forEach(countElement => {
        countElement.textContent = sharedCount;
    });
    // Save the updated count to localStorage
    localStorage.setItem('sharedCount', sharedCount);
}

// Add event listeners to all buttons
document.querySelectorAll('.update-button').forEach(button => {
    button.addEventListener('click', () => {
        sharedCount++; // Increment the shared count
        updateCounts(); // Update the count on all elements
    });
});

// Initialize counts when the page loads
updateCounts();
