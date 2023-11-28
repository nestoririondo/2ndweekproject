const recipes = document.querySelector('#document')

console.log(document);

const handleClick = (koshary) => {
    document.src = `./document/${koshary}.html`
}