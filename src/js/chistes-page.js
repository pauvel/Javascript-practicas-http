import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnChiste, olList;
let count = 0;

const crearChistesHtml = () =>{
    const html = `    
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    </ol>`;
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () =>{
    olList = document.querySelector('ol');
    btnChiste = document.querySelector('button');

    btnChiste.addEventListener('click', async()=>{
        btnChiste.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnChiste.disabled = false;
    });
}
// { id, value }
const dibujarChiste = (chiste) =>{
    count++;
    const olItem = document.createElement('li');
    olItem.innerHTML = `${count}.-<b>${chiste.value}</b>`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

export const init = ()=>{
    crearChistesHtml();
    eventos();
}