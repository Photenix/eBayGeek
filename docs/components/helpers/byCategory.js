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

export { getCategory }