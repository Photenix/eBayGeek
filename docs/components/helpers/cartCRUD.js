const url = "https://app-ninja-espacial-del-espacio.herokuapp.com/cart"

const getCart = async() => {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

const deletCart = async(id) => {
    const data = await fetch(`${url}/${id}`,{ 
        method: 'DELETE' 
    })
}

const postCart = async(json) =>{
    try{
        console.log(JSON.stringify( json ))
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify( json ),
            headers: {
                "Content-Type" : "application/json; charset=UTF-8"
            }
        });
    }catch(err){
        throw err;
    }
}

export { postCart, getCart, deletCart}