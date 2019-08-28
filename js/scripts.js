function addIngredientToList()
{
    const ingredientList = document.getElementById("ingredientList"); //our ul from html
    let ingredientName = document.getElementById("ingredientName"); //user inputted ingredient
    let li = document.createElement("li"); //create new li in html

    li.appendChild(document.createTextNode(ingredientName.value)); //add ingredient to li
    ingredientList.appendChild(li); //add li to ul
}