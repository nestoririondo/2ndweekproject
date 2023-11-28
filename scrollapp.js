let image = document.querySelector('.recipe-image');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        image.style.opacity = '0.2';
    } else if (!image.matches(':hover')) {
        image.style.opacity = '1';
    }
});

image.addEventListener('mouseover', () => {
    image.style.opacity = '0.2';
});

image.addEventListener('mouseout', () => {
    if (window.scrollY <= 100) {
        image.style.opacity = '1';
    }
});