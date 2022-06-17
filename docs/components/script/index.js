import { createCategory} from "../helpers/categories.js"
import { createRecomend } from "../helpers/other.js"

const containtCategory = document.getElementById("category")
const containtRecomend = document.getElementById("recomend")


if(sessionStorage.getItem("message") == null || sessionStorage.getItem("message") == false){
    Swal.fire('Funciona el boton bag o cart')
    sessionStorage.setItem("message",true)
}

createCategory(containtCategory)

createRecomend(containtRecomend)
