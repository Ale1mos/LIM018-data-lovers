// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data);
// console.log(data.films[0].poster);
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
console.log('peliculas ordenadas',films)

films.forEach(function(films){
  console.log('pelicula mostrada en pantalla', films.title);
  imagen.innerHTML+= `<div>${films.title} <img src='${films.poster}'> </div>`
})


const filtrado_director = films.filter(f => f.director == "Hayao Miyazaki");
console.log('peliculas filtradas x director',filtrado_director);

filtrado_director.forEach(function(filtrado_director){
  console.log('pelicula mostrada en pantalla', filtrado_director.title);
  imagen.innerHTML+= `<div>${filtrado_director.title} <img src='${filtrado_director.poster}'> </div>`
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
