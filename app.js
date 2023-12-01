// this stores the iframe with the id #recipeiframe in a variable called iframe
const iframe = document.querySelector("#recipeiframe");

// <iframe
// id="recipeiframe"
// src="./recipes/onionsoup.html"
// class="iframe"
// ></iframe>
// is now stored in the variable called iframe


// this function takes the id of the recipe that was clicked on and
// sets the src attribute of the iframe to the recipe that was clicked on
const handleClick = (clickedElement) => {
  iframe.src = `./recipes/${clickedElement}.html`;
};


// recipeLinks is  an array of all elements that have the class .recipelink

const recipeLinks = document.querySelectorAll(".recipelink");
console.log(recipeLinks);
recipeLinks.forEach((link) => { // for each element in the array recipeLinks
  link.addEventListener("click", () => { // add  event listener for click
    handleClick(link.id); // when clicked, run the handleClick function and pass in the id of the element that was clicked on
  });
});
