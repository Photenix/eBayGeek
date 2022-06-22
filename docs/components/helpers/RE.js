class RE{

    static reIMG = ( string ) =>{
        const re = /img\/[a-z0-9]*.[a-z]*/
        try{ return string.match(re)[0] }
        catch(err){ console.error(err) }
    }

    static reMoney = ( string ) =>{
        const re = /\d+.\d+/
        try{ return string.match(re)[0] }
        catch(err){ console.error(err) }
    }
    
    static reHash = ( string ) => {
        const re = /([a-z]*)-(\d+)/
        try{ return string.match(re).slice(1) }
        catch(err){ console.error(err) }
    }
}

export { RE }