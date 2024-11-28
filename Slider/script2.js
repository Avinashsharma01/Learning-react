// Select DOM elements
const imageBox = document.getElementById("imagebox");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("pre");
const buttonsContainer = document.querySelector('.button-box');

// Initialize variables
let currentIndex = 0;
const totalImages = imageBox.children.length;

// Function to update the slide position
function slideTo(index) {
    currentIndex = (index + totalImages) % totalImages; // Wrap around index
    imageBox.style.transform = `translateX(${-currentIndex * 100}%)`;
    updateButtonStyles();
}

// Function to create navigation buttons
function createNavigationButtons() {
    for (let i = 0; i < totalImages; i++) {
        const button = document.createElement('div');
        button.className = 'button';
        button.style.background = 'rgba(0, 0, 0, 0.5)'; // Default button color
        button.addEventListener('click', () => {
            slideTo(i); // Slide to the respective image
        });
        buttonsContainer.appendChild(button);
    }
}

// Function to update button styles
function updateButtonStyles() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.style.background = (index === currentIndex) ? 'lime' : 'rgba(0, 0, 0, 0.5)';
    });
}

// Function to initialize slider styles
function initializeSlider() {
    imageBox.style.display = "flex";
    imageBox.style.transition = "transform 0.8s ease-in-out"; // Smooth sliding effect
    createNavigationButtons();
    updateButtonStyles();
}

// Event listeners for navigation buttons
nextButton.addEventListener("click", () => slideTo(currentIndex + 1));
prevButton.addEventListener("click", () => slideTo(currentIndex - 1));

// Automatic slideshow functionality
setInterval(() => slideTo(currentIndex + 1), 5000);

// Initialize the slider
initializeSlider();
