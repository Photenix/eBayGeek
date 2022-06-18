import { getCategory } from "../helpers/byCategory.js"
import { cardSquare } from "../module/cards.js"

let category = window.location.hash.slice(1, -1)

const container = document.getElementById("cart-shop")

document.getElementById("buttons").addEventListener("click",e=>{
    category = window.location.hash.slice(1, -1)
    verify()
})


//exist this category?
const verify = () =>{
    if(category == "art") category = "clothing";
    else { category = "other" };
    createCart()
}

const createCart = async () =>{
    const data = await getCategory(category)

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let {image, description, price} = element
        image ="../img/5.jpeg"
        cardSquare( image, description, price, container )
    }
}



verify()
console.log(category)