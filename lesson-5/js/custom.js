// Custom JavaScript

// STEP 15: Call up the carousel using the id and use the carousel() method, create the options object
const carouselCars = document.querySelector('#carouselCars');

const carousel = new bootstrap.Carousel(carouselCars, {
    // ride: 'carousel',
    interval: 5000,
    pause: true,
    wrap: false,
    keyboard: false
});

// STEP 16: Change the interval to 5 seconds (set in milliseconds)

// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding
