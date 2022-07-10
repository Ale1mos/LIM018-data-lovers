import data from './data/ghibli/ghibli.js';
/// PERSONAJES DE LAS PELICULAS /// 
import {ordenarAZ,filterDirector,filtering,obtenerPersonajes,ordenarPersonajes,filtrarGenero,filtrarEspecie} from './data.js';

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



///----PERSONAJES------///

let characterCards=document.getElementById("characterCards")
let sortCharacter=document.getElementById("sortCharacter")
let gender=document.getElementById('gender')
let specie=document.getElementById('specie')
let animaciones = document.getElementById('animaciones')
let locaciones = document.getElementById('locaciones')


function showCharacter(element){
  characterCards.innerHTML= "";
  for(let i=0 ; i< element.length; i++){
    characterCards.innerHTML+=`<div class='card'>
    <ul>
    <li><img src='${element[i].img}'></li>
    <li>${element[i].name}</li>
    <li>${element[i].age}</li>
    <li>${element[i].gender}</li>
    <li>${element[i].specie}</li>
    </ul>
    </div>`;
  }
}

const personajes = obtenerPersonajes(films)

function showSection(section1,section2){
  section1.style.display ='none'
  section2.style.display ='none'
}


/// PERSONAJES EN PANTALLA ///
// showSection(animaciones,locaciones)
showCharacter(personajes)

/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
sortCharacter.addEventListener("change",(event)=>{
  // const selectedSort = event.target.value;
  // const filteredSort = ordenarPersonajes(personajes);
  ordenarPersonajes(personajes);
  showCharacter(personajes);
});

/// PERSONAJES FILTRADOS EN PANTALLA ///
gender.addEventListener("change",(event)=>{
  const selectedGender = event.target.value;
  const filteredGender = filtrarGenero(personajes, selectedGender);
  showCharacter(filteredGender);
});

specie.addEventListener("change",(event)=>{
  const selectedSpecie = event.target.value;
  const filteredSpecie = filtrarEspecie(personajes, selectedSpecie);
  showCharacter(filteredSpecie);
});

























