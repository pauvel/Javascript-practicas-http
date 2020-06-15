const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async( id )=>{
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;
}

const crearUsuario= async( user )=>{
    const resp = await fetch( urlCRUD, { // Utilizamos el segundo param. del fetch
        method: 'POST',
        body: JSON.stringify(user), // Enviamos un string de los datos que enviaremos.
        headers:{ // Info adicional sobre la peticion.
            'Content-Type' : 'application/json'
        }
    });
    return await resp.json();
}

const actualizarUsuario= async( id, user )=>{
    const resp = await fetch( `${urlCRUD}/${id}`, { // Utilizamos el segundo param. del fetch
        method: 'PUT',
        body: JSON.stringify(user), // Enviamos un string de los datos que enviaremos.
        headers:{ // Info adicional sobre la peticion.
            'Content-Type' : 'application/json'
        }
    });
    return await resp.json();
}
export{
    getUsuario,
    crearUsuario,
    actualizarUsuario
}