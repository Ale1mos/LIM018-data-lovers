import data from './data/ghibli/ghibli.js';
/// PERSONAJES DE LAS PELICULAS /// 
import {ordenarAZ,filterDirector,filtering,obtenerPersonajes,ordenarPersonajes,filtrarPersonajes} from './data.js';

// let itemAZ = document.getElementById("itemAZ");
// let directors = document.getElementById("directors")
const films = data.films
// ordenarAZ(films)
// console.log(films)

// const btnReseña =document.getElementById("btnReseña")
// btnReseña.style.display="none"

const mainImagen = document.querySelector(".mainImagen")

function showFilms(element){
  mainImagen.innerHTML= "";
  for (const film of element){
    const elementTitle = `
    <div id="divCard" class="film">
        <div class="container">
            <div class="face">
                <div class="posterTitle">
                    <h2>${film.title}</h2>
                    <img alt="Film poster" src="${film.poster}"/>
                </div>
            </div>
            <div class="info">             
              <div class="infoFirstA">
                <p class="text">Año de Lanzamiento: ${film.release_date}</p>
                <p class="text">Director: ${film.director}</p>
                <p class="text">Productor: ${film.producer}</p>
                <p class="text">Score: ${film.rt_score}</p>  
              </div>                
            </div>
        </div>
    </div>`;
    

mainImagen.innerHTML += elementTitle;
}
}
showFilms(films)


const posterTitle = document.querySelector(".posterTitle")
// const face = document.getElementById("face")
posterTitle.addEventListener("click",function(){
  function showFilms(element){
    mainImagen.innerHTML= "";
    for (const film of element){
      const elementTitle = `
      <div id="divCard" class="film">
          <div class="container">
              <div class="face">
                <div class="posterTitle">
                  <h2>${film.title}</h2>
                  <img class="face" alt="Film poster" src="${film.poster}"/>
                </div>
              </div>
              <div class="info">
                <div>
                  <p class="infoSecond">Descripción: ${film.description}</p>
                </div>
              </div>
          </div>
      </div>`;
  mainImagen.innerHTML += elementTitle;
  }
  }
  showFilms(films)
  
})

itemAZ.addEventListener("change",(event)=>{
  const selectedSort = event.target.value;
  const filteredSort = ordenarAZ(films, selectedSort);
  showFilms(filteredSort);
});

director.addEventListener("change",(event)=>{
  const selectedDirector = event.target.value;
  const filteredDirector = filtering(films, "director", selectedDirector );
  showFilms(filteredDirector);
});

producer.addEventListener("change",(event)=>{
  const selectedProducer = event.target.value;
  const filteredProducer = filtering(films, "producer", selectedProducer );
  showFilms(filteredProducer);
});

date.addEventListener("change",(event)=>{
  const selectedDate = event.target.value;
  const filteredDate = filtering(films, "release_date", selectedDate );
  showFilms(filteredDate);
});

const btnReseña = document.getElementById("btnReseña")

btnReseña.addEventListener("click",function(){

})

// let directorProducer = result;
// let imagen=document.getElementById("imagen")


/// PERSONAJES MOSTRADOS EN PANTALLA ///

// import data from './data/ghibli/ghibli.js';
// import {obtenerPersonajes} from './data.js';
// import {ordenarPersonajes} from './data.js';
// import {filtrarPersonajes} from './data.js';


const especie = 'Cat'
let imagen=document.getElementById("imagen")


/// PERSONAJES EN PANTALLA///
const personajes = obtenerPersonajes(films)
for (let i = 0 ; i< personajes.length ; i++){
    imagen.innerHTML+=`<div>${personajes[i].name} <img src='${personajes[i].img}'> </div>`;
  }
console.log('personajes mostrados')


/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
// no ordena aun
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























