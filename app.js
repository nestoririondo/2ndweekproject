const recipes = document.querySelector('#recipes')

console.log(recipes);

const handleClick = (recipe) => {
    recipes.src = `./recipes/${recipe}.html`
}