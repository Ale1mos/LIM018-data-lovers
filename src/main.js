

/// PERSONAJES DE LAS PELICULAS /// 

import data from './data/ghibli/ghibli.js';
import {obtenerPersonajes} from './data.js';
import {ordenarPersonajes} from './data.js';
import {filtrarPersonajes} from './data.js';

const films = data.films
const especie = 'Cat'
let imagen=document.getElementById("imagen")


/// PERSONAJES EN PANTALLA///
const personajes = obtenerPersonajes(films)
for (let i = 0 ; i< personajes.length ; i++){
    imagen.innerHTML+=`<div>${personajes[i].name} <img src='${personajes[i].img}'> </div>`;
  }
console.log('personajes mostrados')


/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
ordenarPersonajes(personajes)
for(let i=0 ; i< personajes.length; i++){
    imagen.innerHTML+=`<div>${personajes[i].name} <img src='${personajes[i].img}'> </div>`;
  }
console.log('personajes ordenados mostrados')


/// PERSONAJES FILTRADOS EN PANTALLA ///
const personajes_filtrado = filtrarPersonajes(personajes,especie)
for(let i=0 ; i< personajes_filtrado.length; i++){
  imagen.innerHTML+=`<div>${personajes_filtrado[i].name} <img src='${personajes_filtrado[i].img}'> </div>`;
}
console.log('personajes filtrados mostrados')























