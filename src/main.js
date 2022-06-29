// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import {sortLetter} from './data.js';
// import data from './data/ghibli/ghibli.js'; este si
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data);
// console.log(data.films[0].poster);
// let poster=data.films[0].director
// console.log(poster)

// let imagen=document.getElementById("imagen")  este si
// const films = data.films   este si


// films.sort((a,b) => {
//   if(a.title < b.title){
//     return -1;
//   }
//   if(a.title > b.title){
//     return 1;
//   }
//   return 0;
// }) 
// console.log('peliculas ordenadas',films)

// films.forEach(function(films){
//   console.log('pelicula mostrada en pantalla', films.title);
//   imagen.innerHTML+= `<div>${films.title} <img src='${films.poster}'> </div>`
// })


// const filtrado_director = films.filter(f => f.director == "Hayao Miyazaki");
// console.log('peliculas filtradas x director',filtrado_director);

// filtrado_director.forEach(function(filtrado_director){
//   console.log('pelicula mostrada en pantalla', filtrado_director.title);
//   imagen.innerHTML+= `<div>${filtrado_director.title} <img src='${filtrado_director.poster}'> </div>`
// })



/// PERSONAJES DE LAS PELICULAS /// 

import data from './data/ghibli/ghibli.js';
import {obtenerPersonajes} from './data.js';
import {ordenarPersonajes} from './data.js';
import {filtrarPersonajes} from './data.js';

const films = data.films
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
const personajes_filtrado = filtrarPersonajes(personajes)
for(let i=0 ; i< personajes_filtrado.length; i++){
  imagen.innerHTML+=`<div>${personajes_filtrado[i].name} <img src='${personajes_filtrado[i].img}'> </div>`;
}
console.log('personajes filtrados mostrados')






















