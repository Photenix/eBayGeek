import { postCart } from "../helpers/cartCRUD.js"
import { createRecomend } from "../helpers/other.js"
import { moduleCategoryButton } from "../module/categoryButton.js"
import { getCategory, getInfoId } from "../helpers/byCategory.js"

const containtRecomend = document.getElementById("recomend")

const imgMain = document.getElementById("main-img")
const money = document.getElementById("money")
const description = document.getElementById("description")

//init
createRecomend(containtRecomend)
moduleCategoryButton("..")


//post cart
document.getElementById("add").addEventListener("click",()=>{
    let json = {
        "image": reIMG(imgMain.src),
        "description" : description.innerText,
        "price": reMoney(money.innerText)
    }
    console.log(json)
    //postCart(json)
})

//regular expresion
const reIMG = ( string ) =>{
    const re = /img\/[a-z0-9]*.[a-z]*/
    return string.match(re)[0]
}

const reMoney = ( string ) =>{
    const re = /\d+.\d+/
    return string.match(re)[0]
}

const fillInformation = async () =>{
    const json = await getCategory()
    const info = await getInfoId( json, id)
}


let category = window.location.hash.slice(1, -1)

