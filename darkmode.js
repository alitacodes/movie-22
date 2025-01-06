// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add click event listener to the button
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');

    // Update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});
