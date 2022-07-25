import data from './data/ghibli/ghibli.js';
/// PERSONAJES DE LAS PELICULAS /// 
import {ordenarAZ, filtering, obtenerDataTipo, filtrarDoble,ordenarPersonajes, filtrarDobleLocaciones} from './data.js';




// let itemAZ = document.getElementById("itemAZ");
// let directors = document.getElementById("directors")
const films = data.films
// ordenarAZ(films)
// console.log(films)

const filmsCountDiv = document.getElementById("filmsCountDiv")

const reseña = document.getElementById("reseña")
reseña.style.display="none"
let personajes_id = document.getElementById('personajes')
personajes_id.style.display="none"
let locaciones = document.getElementById('locaciones')
locaciones.style.display ="none"

const mainImagen = document.querySelector(".mainImagen")

function showFilms(element){
  filmsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " películas.";
  mainImagen.innerHTML= "";
  for (const film of element){
    const elementIndex = `
    <div id="divCard" class="film">
        <div class="container">
            <div>
                <div class="card" id="poster">
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
    

mainImagen.innerHTML += elementIndex;
}}
showFilms(films)


const plus = document.getElementById("plus")

plus.addEventListener("click",function(){
  function showFilms(element){
    mainImagen.innerHTML= "";
    for (const film of element){
      const elementIndex = `
      <div id="divCard" class="film">
          <div class="container">
              <div>
                <div class="card" id="poster">
                  <h2>${film.title}</h2>
                  <img alt="Film poster" src="${film.poster}"/>
                </div>
              </div>
              <div class="info">
                <div>
                  <p class="infoSecond"><h3>Descripción:</h3><br> ${film.description}</p>
                </div>
              </div>
          </div>
      </div>`;
  mainImagen.innerHTML += elementIndex;
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

score.addEventListener("change",(event)=>{
  const selectedScore = event.target.value;
  const filteredScore = filtering(films, "rt_score", selectedScore );
  showFilms(filteredScore);
});



let btnReseña = document.getElementById("btnReseña")
let animaciones = document.getElementById("animaciones")
let imgCuadro = document.getElementById("imgCuadro")

btnReseña.addEventListener("click",function(){ 
  animaciones.style.display="none"
  personajes_id.style.display="none"
  locaciones.style.display ="none"
  imgCuadro.style.display="block"
  reseña.style.display="block"
})


let btnAnimaciones = document.getElementById("btnAnimaciones")

btnAnimaciones.addEventListener("click",function(){ 
  imgCuadro.style.display="none"
  reseña.style.display="none"
  animaciones.style.display="block"
  personajes_id.style.display="none"
  locaciones.style.display ="none"
})


///// *************PERSONAJES********************* ///


let characterCards=document.getElementById("characterCards")
let charsCountDiv=document.getElementById("charsCountDiv")
let sortCharacter=document.getElementById("sortCharacter")
let gender=document.getElementById('gender')
let specie=document.getElementById('specie')
let btnPersonajes = document.getElementById('btnPersonajes')

let locationsCards=document.getElementById("locationsCards")
let locationsCountDiv=document.getElementById("locationsCountDiv")
let sortLocation=document.getElementById("sortLocation")
let climate=document.getElementById("climate")
let terrain=document.getElementById("terrain")
let btnLocaciones = document.getElementById('btnLocaciones')

let filters = {
  gender :"" , 
  specie :"",
  climate:"",
  terrain:""
}

function showCharacter(element,tipo){
  if(tipo=='personajes'){
    charsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " personajes.";
    characterCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      characterCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].img}' width='200px'>
      <p>${element[i].name}</p>
      <p>Edad:${element[i].age}</p>
      <p>Género:${element[i].gender}</p>
      <p>Especie:${element[i].specie}</p>
      </ul>
      </div>`;
    }
  }else{
    locationsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " locaciones.";
    locationsCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      locationsCards.innerHTML+=`<div class='card' id="posterLocation">
      <ul>
      <img src='${element[i].img}' width='200px'>
      <p>${element[i].name}</p>
      <p>Clima:${element[i].climate}</p>
      <p>Terreno:${element[i].terrain}</p>
      </ul>
      </div>`;
    }
  }
}

function showSection(section1,section2,section3,section4,data,tipo){
  section1.style.display ='none'
  section2.style.display ='none'
  section3.style.display = 'none'
  section4.style.display ='block'
  showCharacter(data,tipo)
}

/// PERSONAJES EN PANTALLA ///
btnPersonajes.addEventListener("click",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,locaciones,reseña,personajes_id,dataPersonajes,tipo);
})

/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
sortCharacter.addEventListener("change",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  ordenarPersonajes(dataPersonajes);
  showCharacter(dataPersonajes,tipo);
});

/// PERSONAJES FILTRADOS EN PANTALLA ///

gender.addEventListener("change",(event)=>{
  const selectedGender = event.target.value;
  // console.log(selectedGender)
  filters.gender = selectedGender
  
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  console.log(dataPersonajes)

  const filteredGender = filtrarDoble(dataPersonajes, filters);
  console.log(filteredGender)

  showCharacter(filteredGender,tipo);
});


specie.addEventListener("change",(event)=>{
  const selectedSpecie = event.target.value;
  filters.specie = selectedSpecie
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const filteredSpecie = filtrarDoble(dataPersonajes, filters);
  showCharacter(filteredSpecie,tipo);
});



///////***** LOCACIONES ******///////////////

/// LOCACIONES EN PANTALLA ///

btnLocaciones.addEventListener("click",(event)=>{
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,personajes_id,reseña,locaciones,dataPersonajes,tipo);
})

/// LOCACIONES ORDENADAS EN PANTALLA ///

sortLocation.addEventListener("change",(event)=>{
  // const selectedSort = event.target.value;
  // const filteredSort = ordenarPersonajes(personajes);
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  ordenarPersonajes(dataPersonajes);
  showCharacter(dataPersonajes,tipo);
});

/// LOCACIONES FILTRADAS EN PANTALLA ///

climate.addEventListener("change",(event)=>{
  const selectedClimate = event.target.value;
  filters.climate = selectedClimate
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const filteredClimate = filtrarDobleLocaciones(dataPersonajes, filters);
  showCharacter(filteredClimate,tipo);
});

terrain.addEventListener("change",(event)=>{
  const selectedTerrain = event.target.value;
  filters.terrain = selectedTerrain
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const filteredTerrain = filtrarDobleLocaciones(dataPersonajes, filters);
  showCharacter(filteredTerrain,tipo);
});

























