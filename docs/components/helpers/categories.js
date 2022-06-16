import { cardCicle } from "../module/cards.js"

const url = "http://localhost:3000/categories"

const getCart = async() => {
    try{
        const data = await fetch(url)
        const json = await data.json()
        return json
    }catch(err){
        throw err
    }
}

const createCategory = async( container ) =>{
    const json = await getCart()
    for (let i = 0; i < json.length; i++) {
        const { image, category } = json[i];
        cardCicle(image,category,container)
    }
}


export { getCart, createCategory }