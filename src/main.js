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

/// PERSONAJES /// 

/// PERSONAJES EN PANTALLA
films.forEach(function(films){
  films.people.forEach(function(people){
    console.log('personaje',people.name);
    imagen.innerHTML+= `<div>${people.name} <img src='${people.img}'> </div>`
  })
})

/// PERSONAJES ORDENADOS EN PANTALLA
films.forEach(function(films){
  films.people.sort((a,b) =>{
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  })
  console.log('personajes ordenado',films.people);
  films.people.forEach(function(people){
    console.log('personaje ordenado', people.name);
    imagen.innerHTML+= `<div>${people.name} <img src='${people.img}'> </div>`
  })
})

/// PERSONAJES FILTRADOS EN PANTALLA
films.forEach(function(films){
  const filtrado = films.people.filter(people => people.specie == "Cat");
  console.log('personajes filtrados', filtrado);
  filtrado.forEach(function(people){
    console.log('personaje filtrado',people.name);
    imagen.innerHTML+= `<div>${people.name} <img src='${people.img}'> </div>`
  })
})













