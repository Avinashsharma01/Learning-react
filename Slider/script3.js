// Select DOM elements
const imageBox = document.getElementById("imagebox");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("pre");
const buttonsContainer = document.querySelector('.button-box');

// Initialize variables
let currentIndex = 0;
const totalImages = imageBox.children.length;

// Function to slide images
function slideTo(index) {
    currentIndex = (index + totalImages) % totalImages; // Loop back if out of bounds
    imageBox.style.transform = `translateX(${-currentIndex * 100}%)`;
    updateButtonStyles();
}

// Create buttons
for (let i = 0; i < totalImages; i++) {
    const button = document.createElement('div');
    button.className = 'button';
    button.addEventListener('click', () => slideTo(i)); // Slide when button is clicked
    buttonsContainer.appendChild(button);
}

// Update button styles
function updateButtonStyles() {
    document.querySelectorAll('.button').forEach((button, index) => {
        button.style.background = (index === currentIndex) ? 'lime' : 'rgba(0, 0, 0, 0.5)';
    });
}

// Button event listeners
nextButton.addEventListener("click", () => slideTo(currentIndex + 1));
prevButton.addEventListener("click", () => slideTo(currentIndex - 1));

// Auto-slide every 5 seconds
setInterval(() => slideTo(currentIndex + 1), 5000);

// Initial setup
imageBox.style.display = "flex";
imageBox.style.transition = "transform 0.8s ease-in-out";
updateButtonStyles();
