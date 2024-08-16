// script.js

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-spinner').style.display = 'none'; // Hide loading spinner
        document.querySelector('.content').style.display = 'block'; // Show content
    }, 1000); // Delay of 1 second
});
