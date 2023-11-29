// this stores the iframe with the id #recipeiframe in a variable called iframe
const iframe = document.querySelector('#recipeiframe')

// logs the variable to the console
console.log(iframe);

// this function takes a recipe (string) as an argument and sets the src property of the iframe to the path of the recipe we want to load
const handleClick = (recipe) => {
    iframe.src = `./recipes/${recipe}.html`
}
