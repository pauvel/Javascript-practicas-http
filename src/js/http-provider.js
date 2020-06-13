const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async()=>{
    try{
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se pudo realizar la peticion';
        const { icon_url,id,value } = await resp.json();
        return {
            icon_url,
            id,
            value
        };
    }catch(err){
        return {
            icon_url: 'Sin url',
            id: 'Sin id',
            value: 'Sin valores'
        }
    }
}

export{
    obtenerChiste,
}