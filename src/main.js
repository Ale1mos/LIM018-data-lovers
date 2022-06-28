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
let imagen=document.getElementById("imagen")
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







// '
// for(let i=0;i<films.length;i++)
// let poster=data.films[i].poster
// imagen.src=poster;


// const array = [10, 20, 30, 40, 50];

// array.forEach(function(element) {
//   console.log(element);
// });





// let texto =films.includes("poster")
// console.log(texto);
