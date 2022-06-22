import { postCart } from "../helpers/cartCRUD.js"
import { createRecomend } from "../helpers/other.js"
import { moduleCategoryButton } from "../module/categoryButton.js"
import { getCategory, getInfoId } from "../helpers/byCategory.js"
import { RE } from "../helpers/RE.js"

const containtRecomend = document.getElementById("recomend")

const imgMain = document.getElementById("main-img")
const moneyTXT = document.getElementById("money")
const descriptionTXT = document.getElementById("description")

//init
createRecomend(containtRecomend, '../../',true)
moduleCategoryButton("..")


//post cart
document.getElementById("add").addEventListener("click",()=>{
    let json = {
        "image": RE.reIMG(imgMain.src),
        "description" : descriptionTXT.innerText,
        "price": RE.reMoney(moneyTXT.innerText)
    }
    //console.log(json)

    Swal.fire({
        title: 'Quiere agregarlo al carrito?',
        text: "Esta opcion solo es digna para los uwu",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Agregar al carrito',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto en carrito',
                showConfirmButton: false,
                timer: 1000
            })
            //agregar al carrito
            postCart(json)
        }
      })
})

const fillInformation = async (category, idNUm) =>{
    const json = await getCategory( category )
    const info = await getInfoId( json, idNUm )
    
    const { image, description, price, id } = info

    imgMain.src = `../../${image}`
    descriptionTXT.innerText = description
    moneyTXT.innerText = `$${price}`
}

let category = window.location.hash

const info = RE.reHash(category)

fillInformation(info[0],info[1])