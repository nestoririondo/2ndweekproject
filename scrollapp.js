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


// Thumbs Up/Down Functionality
const feedbackDiv = document.querySelector('#feedback');
const thumbsUp = document.querySelector('#thumbsup');
const thumbsDown = document.querySelector('#thumbsdown');


const doTheThumbs = (event) => {
    const newP = document.createElement('p')
    if (event.target.id === 'thumbsdown') {
        thumbsDown.style.color = 'red';
        newP.innerHTML = 'Learn to cook!'
        newP.style.color = 'red';
        thumbsUp.style.color = 'black'
        if (feedbackDiv.childElementCount < 1) {
            feedbackDiv.append(newP);
        } else {
            feedbackDiv.removeChild(feedbackDiv.lastChild);
            feedbackDiv.append(newP);
        }
        document.querySelector('#thumbsup').style.display = 'hidden';
    } else if (event.target.id === 'thumbsup') {
        thumbsUp.style.color = 'green';
        newP.innerHTML = 'Awesome!'
        newP.style.color = 'green';
        thumbsDown.style.color = 'black'
        if (feedbackDiv.childElementCount < 1) {
            feedbackDiv.append(newP);
        } else {
            feedbackDiv.removeChild(feedbackDiv.lastChild);
            feedbackDiv.append(newP);
        }
        document.querySelector('#thumbsdown').style.display = 'hidden';
    }
}

thumbsUp.addEventListener('click', doTheThumbs);
thumbsDown.addEventListener('click', doTheThumbs);

thumbsUp.addEventListener('mouseover', () => {
    thumbsUp.style.color = 'green';
});
thumbsDown.addEventListener('mouseover', () => {
    thumbsDown.style.color = 'red'; 
}
);
thumbsUp.addEventListener('mouseout', () => {
    thumbsUp.style.color = 'black';
    }

);
thumbsDown.addEventListener('mouseout', () => {
    thumbsDown.style.color = 'black';
}
);

// End of thumbs up/down functionality

// Stars functionality
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');

const doTheStars = (event) => {
    star1.style.color = 'black';
    star2.style.color = 'black';
    star3.style.color = 'black';
    star4.style.color = 'black';
    star5.style.color = 'black';
    if (event.target.id === 'star1') {
        star1.style.color = 'gold';
    } else if (event.target.id === 'star2') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
    } else if (event.target.id === 'star3') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
    } else if (event.target.id === 'star4') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
        star4.style.color = 'gold';
    } else if (event.target.id === 'star5') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
        star4.style.color = 'gold';
        star5.style.color = 'gold';
    }
}

star1.addEventListener('mouseover', doTheStars);
star2.addEventListener('mouseover', doTheStars);
star3.addEventListener('mouseover', doTheStars);
star4.addEventListener('mouseover', doTheStars);
star5.addEventListener('mouseover', doTheStars);

// End of stars functionality