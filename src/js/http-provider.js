const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'phwzqylx';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dlds4xwpk/image/upload';

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

const obtenerUsuarios = async() =>{
    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();
    return usuarios;
}

//Archivo :: File 
const subirImagen = async( archivo )=>{
    const formData = new FormData(); // Form de html
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivo);
    try{
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }catch(err){
        throw err;
    }
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}