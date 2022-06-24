// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import {sortLetter} from './data.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data);
// console.log(data.films[0].poster);
// let poster=data.films[0].director
// console.log(poster)
let imagen=document.getElementById("imagen")
const films = data.films


films.sort((a,b) => {
  if(a.title < b.title){
    return -1;
  }
  if(a.title > b.title){
    return 1;
  }
  return 0;
}) 
console.log(films)

//engloblar la funcionalidad en una funcion
//sentencia
const filteredFilms = films.filter((film)=> film.director === "Hayao Miyazaki")


filteredFilms.forEach(function(film){
  console.log(film.title);
  imagen.innerHTML+= `<div>${film.title} <img src='${film.poster}'> </div>`
})







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
