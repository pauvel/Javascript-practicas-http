import * as CRUD from './js/crud-provider';

// CRUD.getUsuario(1).then( (data) =>{
//     console.log(data);
// });

// CRUD.crearUsuario({
//     name: 'Paul',
//     job: 'programmer'
// }).then(console.log);

// CRUD.actualizarUsuario(1, {
//     name: 'Vershy',
//     job: 'cleaner'
// }).then(console.log);

CRUD.borrarUsuario(10).then(console.log);