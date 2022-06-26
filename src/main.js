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



/// PERSONAJES DE LAS PELICULAS /// 

/// PERSONAJES MOSTRADOS EN PANTALLA ///

let personajes = []

films.forEach(function(films){
  personajes = personajes.concat(films.people);
})
console.log('personajes unidos concat',personajes)

personajes.forEach(function(personajes){
  imagen.innerHTML+=`<div>${personajes.name} <img src='${personajes.img}'> </div>`;
  console.log('personaje mostrado en pantalla', personajes.name) ;
})

/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///

personajes.sort((a,b) =>{
  if(a.name < b.name){
    return -1;
  }
  if(a.name > b.name){
    return 1;
  }
  return 0;
})
console.log('personajes ordenados sort',personajes)

personajes.forEach(function(personajes){
  imagen.innerHTML+=`<div>${personajes.name} <img src='${personajes.img}'> </div>`;
  console.log('personajes ordenados en pantalla', personajes.name);
})

/// PERSONAJES FILTRADOS EN PANTALLA ///

const personajes_filtrado = personajes.filter(personajes => personajes.specie == 'Cat');
console.log('personajes filtrados filter', personajes_filtrado);

personajes_filtrado.forEach(function(personajes){
  imagen.innerHTML+= `<div>${personajes.name} <img src='${personajes.img}'> </div>`;
  console.log('personajes filtrados en pantalla',personajes.name);
})

// films.forEach(function(films){
//   const filtrado = films.people.filter(people => people.specie == "Cat");
//   console.log('personajes filtrados', filtrado);
//   filtrado.forEach(function(people){
//     console.log('personaje filtrado',people.name);
//     imagen.innerHTML+= `<div>${people.name} <img src='${people.img}'> </div>`
//   })
// })















