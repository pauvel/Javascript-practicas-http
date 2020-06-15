import { obtenerUsuarios } from "./http-provider";

const body  = document.body;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <tr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = (usuario) => {
    const cuerpoTabla = document.querySelector('tbody');
    const html = `
        <td scope="col">${usuario.id}</td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    cuerpoTabla.appendChild(tr);
}


export const init = async() => {
    crearHtml();
    const users = await obtenerUsuarios();
    users.forEach((e) => {
        crearFilaUsuario(e);
    });    
}

