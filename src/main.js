// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import {sortLetter} from './data.js';
import data from './data/ghibli/ghibli.js';
import {ordenarAZ,filterDirector} from './data.js';
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
import {mostrarPersonajes} from './data.js';
import {ordenarPersonajes} from './data.js';
import {filtrarPersonajes} from './data.js';

const films = data.films
ordenarAZ(films)
// console.log(films)
// console.log(ordenarAZ(films))

const filmsOrder = ordenarAZ(films)
const filterByDirector = filterDirector(films,"Hayao Miyazaki")

// console.log(filterByDirector)



// films.forEach(function(films){
//   console.log('pelicula mostrada en pantalla', films.title);
//   imagen.innerHTML+= `<div>${films.title} <img src='${films.poster}'> </div>`
// })

function showFilms(films){
  films.forEach(function(element){
    console.log('pelicula mostrada en pantalla', element.title);
    imagen.innerHTML+= `<div class="portadaTitle"><h3>${element.title}</h3> <img src='${element.poster}'> </div>`
})
}
showFilms(films)
// let imagen=document.getElementById("imagen")


/// PERSONAJES MOSTRADOS EN PANTALLA ///
const personajes = mostrarPersonajes(films)

/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
ordenarPersonajes(personajes)

/// PERSONAJES FILTRADOS EN PANTALLA ///

const personajes_filtrados = filtrarPersonajes(personajes)
console.table(personajes_filtrados)

// const personajes_filtrado = personajes.filter(personajes => personajes.specie == 'Cat');
// console.log('personajes filtrados', personajes_filtrado);

// for(let i=0 ; i< personajes_filtrado.length; i++){
//   imagen.innerHTML+=`<div>${personajes_filtrado[i].name} <img src='${personajes_filtrado[i].img}'> </div>`;
// }
// console.log('personajes filtrados mostrados')



// personajes_filtrado.forEach(function(personajes){
//   imagen.innerHTML+= `<div>${personajes.name} <img src='${personajes.img}'> </div>`;
//   console.log('personajes filtrados en pantalla',personajes.name);
// })








// '
// for(let i=0;i<films.length;i++)
// let poster=data.films[i].poster
// imagen.src=poster;








