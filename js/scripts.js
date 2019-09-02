let selectedIngredients = [];

function addIngredientToList()
{
    let ingredientName = document.getElementById("ingredientName"); //user inputted ingredient

    selectedIngredients.push(ingredientName);

    console.log(selectedIngredients);
}