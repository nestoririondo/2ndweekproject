// this creates a variable called image and stores the whole img element from the html.
let image = document.querySelector('.recipe-image');

// this looks at the document and listens for a scroll event. When a scroll event is detected, the function is called.
document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // this stores the vertical scroll position of the window in a variable called scrollPosition

    // console.log(scrollPosition) // this logs the scroll position to the console (for reference, not necessary)

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
const positiveFeedback = 'Awesome!';
const negativeFeedback = 'Learn to cook!';


const doTheThumbs = (event) => {
    const newP = document.createElement('p')
    if (event.target.id === 'thumbsdown') {
        thumbsDown.style.color = 'red';
        newP.innerHTML = negativeFeedback
        newP.style.color = 'red';
        thumbsUp.style.color = 'black'
        thumbsUp.style.scale = '1'
        if (feedbackDiv.childElementCount < 1) {
            feedbackDiv.append(newP);
        } else {
            feedbackDiv.removeChild(feedbackDiv.lastChild);
            feedbackDiv.append(newP);
        }
        document.querySelector('#thumbsup').style.display = 'hidden';
    } else if (event.target.id === 'thumbsup') {
        thumbsUp.style.color = 'green';
        newP.innerHTML = positiveFeedback
        newP.style.color = 'green';
        thumbsDown.style.color = 'black'
        thumbsDown.style.scale = '1'
        if (feedbackDiv.childElementCount < 1) {
            feedbackDiv.append(newP);
        } else {
            feedbackDiv.removeChild(feedbackDiv.lastChild);
            feedbackDiv.append(newP);
        }
        document.querySelector('#thumbsdown').style.display = 'hidden';
    }
}

const doTheMouseOver = (event) => {
    if (event.target.id === 'thumbsdown') {
        thumbsDown.style.color = 'red';
        thumbsDown.style.cursor = 'pointer';
        thumbsDown.style.scale = '1.5'
        if (feedbackDiv.lastChild.innerHTML !== positiveFeedback) {
            thumbsUp.style.color = 'black'
            thumbsUp.style.scale = '1'
        }

    } else if (event.target.id === 'thumbsup') {
        thumbsUp.style.color = 'green';
        thumbsUp.style.cursor = 'pointer';
        thumbsUp.style.scale = '1.5'
        if (feedbackDiv.lastChild.innerHTML !== negativeFeedback) {
            thumbsDown.style.color = 'black'
            thumbsDown.style.scale = '1'
        }
    }
}

const doTheMouseOut = (event) => {
    if (event.target.id === 'thumbsdown') {
            if (feedbackDiv.lastChild == null || feedbackDiv.lastChild.innerHTML === positiveFeedback) {
                thumbsDown.style.color = 'black'
                thumbsDown.style.scale = '1'
            }
    } else if (event.target.id === 'thumbsup') {
            if (feedbackDiv.lastChild == null || feedbackDiv.lastChild.innerHTML === negativeFeedback) {
                thumbsUp.style.color = 'black'
                thumbsUp.style.scale = '1'
            }
    }
}


thumbsUp.addEventListener('click', doTheThumbs);
thumbsDown.addEventListener('click', doTheThumbs);
thumbsUp.addEventListener('mouseover', doTheMouseOver);
thumbsDown.addEventListener('mouseover', doTheMouseOver);
thumbsUp.addEventListener('mouseout', doTheMouseOut);
thumbsDown.addEventListener('mouseout', doTheMouseOut);



// End of thumbs up/down functionality

// Stars functionality
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');

const doTheStars = (event) => {

    starReset();

    if (event.target.id === 'star1') {
        star1.style.color = 'gold';
        star1.style.scale = '1.5'
    } else if (event.target.id === 'star2') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star1.style.scale = '1.5'
        star2.style.scale = '1.5'
    } else if (event.target.id === 'star3') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
        star1.style.scale = '1.5'
        star2.style.scale = '1.5'
        star3.style.scale = '1.5'
    } else if (event.target.id === 'star4') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
        star4.style.color = 'gold';
        star1.style.scale = '1.5'
        star2.style.scale = '1.5'
        star3.style.scale = '1.5'
        star4.style.scale = '1.5'
    } else if (event.target.id === 'star5') {
        star1.style.color = 'gold';
        star2.style.color = 'gold';
        star3.style.color = 'gold';
        star4.style.color = 'gold';
        star5.style.color = 'gold';
        star1.style.scale = '1.5'
        star2.style.scale = '1.5'
        star3.style.scale = '1.5'
        star4.style.scale = '1.5'
        star5.style.scale = '1.5'
    }
}

const starReset = () => {
    star1.style.color = 'black';
    star2.style.color = 'black';
    star3.style.color = 'black';
    star4.style.color = 'black';
    star5.style.color = 'black';
    star1.style.cursor = 'pointer';
    star2.style.cursor = 'pointer';
    star3.style.cursor = 'pointer';
    star4.style.cursor = 'pointer';
    star5.style.cursor = 'pointer';
    star1.style.scale = '1'
    star2.style.scale = '1'
    star3.style.scale = '1'
    star4.style.scale = '1'
    star5.style.scale = '1'
}

star1.addEventListener('mouseover', doTheStars);
star2.addEventListener('mouseover', doTheStars);
star3.addEventListener('mouseover', doTheStars);
star4.addEventListener('mouseover', doTheStars);
star5.addEventListener('mouseover', doTheStars);

star1.addEventListener('mouseout', () => {
    star1.style.color = 'black';
    star1.style.scale = '1'
}
);


star1.addEventListener('click', doTheStarsClick);
star2.addEventListener('click', doTheStarsClick);
star3.addEventListener('click', doTheStarsClick);
star4.addEventListener('click', doTheStarsClick);
star5.addEventListener('click', doTheStarsClick);

// End of stars functionality