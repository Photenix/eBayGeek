import { cardCicle } from "../module/cards.js"

const url = "https://app-ninja-espacial-del-espacio.herokuapp.com/categories"

const getCategories = async() => {
    try{
        const data = await fetch(url)
        const json = await data.json()
        return json
    }catch(err){
        throw err
    }
}

const createCategory = async( container ) =>{
    const json = await getCategories()
    for (let i = 0; i < json.length; i++) {
        const { image, category } = json[i];
        cardCicle(image,category,container)
    }
}


export { getCategories, createCategory }