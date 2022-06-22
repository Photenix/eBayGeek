import { cardBar } from "../module/cards.js"
import { getCart, deletCart } from "../helpers/cartCRUD.js"
import { moduleCategoryButton } from "../module/categoryButton.js"

const mainContainer = document.getElementById("cart-shop")

moduleCategoryButton("../../category")

document.addEventListener("DOMContentLoaded",async () =>{
    const json = await getCart()
    const fragmen = document.createDocumentFragment()
    for (let i = 0; i < json.length; i++) {
        let {image, description, price, id} = json[i];
        const container = document.createElement("div")
        container.className = "cart-bar"
        image = "../../img/2.jpeg"
        cardBar(image,description,price,container,id,true)

        const button = document.createElement("button")
        button.className = "delet"
        button.textContent = "DELET"
        button.addEventListener("click",async () => {
            Swal.fire({
                title: 'Quiere sacarlo del carrito?',
                text: "Esta opcion solo es digna para los :v",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sacar',
                cancelButtonText: 'Iee'
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Producto eliminado',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    //accion de eliminar
                    deletCart(id)
                    container.remove()
                }
              })
        })
        
        container.appendChild(button)
        fragmen.appendChild(container)
    }
    mainContainer.appendChild(fragmen)
})