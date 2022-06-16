import { cardSquare } from "../module/cards.js"
import { getCart, deletCart } from "../helpers/cartCRUD.js"


const mainContainer = document.getElementById("cart-shop")

document.addEventListener("DOMContentLoaded",async () =>{
    const json = await getCart()
    const fragmen = document.createDocumentFragment()
    for (let i = 0; i < json.length; i++) {
        let {image, description, price, id} = json[i];
        const container = document.createElement("div")
        container.className = "card-square"
        image = "../../img/2.jpeg"
        cardSquare(image,description,price,container,id,true)

        const button = document.createElement("button")
        button.className = "delet"
        button.textContent = "DELET"
        button.addEventListener("click",async () => {
            alert("Elemento eliminado")
            deletCart(id)
        })
        
        container.appendChild(button)
        fragmen.appendChild(container)
    }
    mainContainer.appendChild(fragmen)
})