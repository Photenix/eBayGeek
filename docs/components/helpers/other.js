import { cardSquare } from "../module/cards.js"

const url = "https://app-ninja-espacial-del-espacio.herokuapp.com/other"

const getOther = async() => {
    try{
        const data = await fetch(url)
        const json = await data.json()
        return json
    }catch(err){
        throw err
    }
}

const createRecomend = async( container ) =>{
    const json = await getOther()
    for (let i = 0; i < json.length; i++) {
        const { image, description, price} = json[i];
        cardSquare(image,description,price,container)
    }
}

export { createRecomend }