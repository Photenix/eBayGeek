import { postCart } from "../helpers/cartCRUD.js"

function cardCicle(src,name, container) {
    const fragmen = document.createDocumentFragment()

    const a = document.createElement("a")
    a.href = ""
    const div = document.createElement("div")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")

    div.className="card-circle"
    img.src = src
    img.alt = "None"
    h3.textContent = name

    div.appendChild(img)
    div.appendChild(h3)

    div.addEventListener('click', function() {
        location.href = `./category#${name.toLowerCase()}`
    }, false);

    fragmen.appendChild(div)

    container.appendChild(fragmen)
}

function cardSquare(src,description,price, container,
    id=NaN,category="other", cd="", isProduct = false) {
    const fragmen = document.createDocumentFragment()

    const div = document.createElement("div")
    const img = document.createElement("img")
    const des = document.createElement("p")
    const pri = document.createElement("p")

    div.id = id
        div.className="card-square"
        div.addEventListener("click", e => {
            /*
            let json = {
                src,
                description,
                price
            }
            postCart(json)
            */
           if(isProduct) {
                location.href = `#${category}-${id}`
                document.location.reload()
            }
           else{
                if(cd == "") location.href = `./category/product#${category}-${id}`
                else location.href = `${cd}/product#${category}-${id}`
           }
    })

    img.src = src
    img.alt = "None"

    des.className = "description"
    pri.className = "money"
    des.textContent = description
    pri.textContent = "$"+price

    div.appendChild(img)
    div.appendChild(des)
    div.appendChild(pri)

    fragmen.appendChild(div)

    container.appendChild(fragmen)
}


function cardBar(src,description,price, container,id=NaN,isCart=false) {
    const fragmen = document.createDocumentFragment()

    const div = document.createElement("div")
    const img = document.createElement("img")
    const des = document.createElement("p")
    const pri = document.createElement("p")

    if(id !=NaN) div.id = id
    if(!isCart) {
        div.className="cart-bar"
        div.addEventListener("click", e => {
            let json = {
                src,
                description,
                price
            }
            postCart(json)
        })
    }
    else div.className="row"
    img.src = src
    img.alt = "None"

    des.className = "description"
    pri.className = "money"
    des.textContent = description
    pri.textContent = "$"+price

    div.appendChild(img)
    div.appendChild(des)
    div.appendChild(pri)

    fragmen.appendChild(div)

    container.appendChild(fragmen)
}





export { cardCicle, cardSquare, cardBar }