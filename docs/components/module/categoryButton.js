import { getCategories } from "../helpers/categories.js"

//requiere de un id buttons para implementarse
const categoryButton = document.getElementById("buttons")

const moduleCategoryButton = async (dirCategory ="") => {
    const json = await getCategories();

    for (let i = 0; i < json.length; i++) {
        const { category } = json[i];
        categoryButton.appendChild(createCategoryButton(category,dirCategory));
    }
}

const createCategoryButton = ( name , cd = "") => {
    // cd direccion del archivo si no es html category
    const a = document.createElement("a")
    const button = document.createElement("button")
    if(cd == "")a.href = '#'+name.toLowerCase()
    else a.href = `${cd}/#${name.toLowerCase()}`
    button.textContent = name
    a.appendChild(button)
    return a
}

export { moduleCategoryButton }