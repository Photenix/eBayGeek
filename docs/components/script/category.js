import { getCategory } from "../helpers/byCategory.js"
import { cardSquare } from "../module/cards.js"
import { moduleCategoryButton } from "../module/categoryButton.js"

let category = window.location.hash.slice(1, -1)

const container = document.getElementById("cart-shop")

moduleCategoryButton()

document.getElementById("buttons").addEventListener("click",e=>{
    setTimeout(verify, 100);
})

//exist this category?
const verify = () =>{
    category = window.location.hash.slice(1, -1)
    console.log(category)
    container.innerHTML = "<h2>Cargando...</h2>"
    if(category == "art") category = "clothing";
    else { category = "other" };
    createCart()
}

const createCart = async () =>{
    const data = await getCategory(category)
    container.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let {image, description, price, id} = element
        image ="../img/5.jpeg"
        cardSquare( image, description, price, container, id, category,".")
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    verify()
})

