// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data);
// console.log(data.films[0].poster);
let imagen=document.getElementById("imagen")
const films = data.films

films.forEach(function(films){
  console.log(films.title);
  imagen.innerHTML+= `<div>${films.title} <img src='${films.poster}'> </div>`
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
