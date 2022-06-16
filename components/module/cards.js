import { postCart } from "../helpers/cartCRUD.js"

function cardCicle(src,name, container) {
    const fragmen = document.createDocumentFragment()

    const div = document.createElement("div")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")

    div.className="card-circle"
    img.src = src
    img.alt = "None"
    h3.textContent = name

    div.appendChild(img)
    div.appendChild(h3)

    div.addEventListener("click", e => {
        let json = {
            src,
            name
        }
        postCart(json)
    })

    fragmen.appendChild(div)

    container.appendChild(fragmen)
}

function cardSquare(src,description,price, container,id=NaN,isCart=false) {
    const fragmen = document.createDocumentFragment()

    const div = document.createElement("div")
    const img = document.createElement("img")
    const des = document.createElement("p")
    const pri = document.createElement("p")

    if(id !=NaN) div.id = id
    if(!isCart) div.className="card-circle"
    else div.className="product"
    img.src = src
    img.alt = "None"

    des.className = "description"
    pri.className = "money"
    des.textContent = description
    pri.textContent = price

    div.appendChild(img)
    div.appendChild(des)
    div.appendChild(pri)

    div.addEventListener("click", e => {
        console.log("here")
    })

    fragmen.appendChild(div)

    container.appendChild(fragmen)
}




export { cardCicle, cardSquare }