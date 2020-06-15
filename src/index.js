import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then( (data) =>{
    console.log(data);
});