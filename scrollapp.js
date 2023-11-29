// this creates a variable called image and stores the whole img element from the html.
let image = document.querySelector('.recipe-image');

// this looks at the document and listens for a scroll event. When a scroll event is detected, the function is called.
document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // this stores the vertical scroll position of the window in a variable called scrollPosition

    console.log(scrollPosition) // this logs the scroll position to the console (for reference, not necessary)

    if (scrollPosition > 0) { // if the scroll position is greater than 0 (0 means the top of the page)
        image.style.opacity = '0.2'; 
    } else if (!image.matches(':hover')) { // If the mouse is not hovering over the image (!image.matches(':hover'))
        image.style.opacity = '1';
    }
});

image.addEventListener('mouseover', () => { // when the mouse hovers over the image
    image.style.opacity = '0.2';
});

// Checks if the vertical scroll position of the window (window.scrollY) is less than or equal to 0. 
// If the scroll position is less than or equal to 0, the opacity of the image is set to 1.
image.addEventListener('mouseout', () => {
    if (window.scrollY <= 0) {
        image.style.opacity = '1';
    }
});