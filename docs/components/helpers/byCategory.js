const URL = "https://app-ninja-espacial-del-espacio.herokuapp.com/"
const getCategory = async(category) => {
    try{
        const data = await fetch(`${URL}${category}`)
        const json = await data.json()
        return json
    }catch(err){
        throw err
    }
}

const getInfoId = ( json, id ) => json.find( element => element.id == id)


export { getCategory, getInfoId }