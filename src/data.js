// export const sortLetter = (data, order) => {
//   if (order === "A-Z") {
//     return data.sort((a, z) => a.title > z.title ? 1 : -1);
//   } else if (order === "Z-A") {
//     return data.sort((a, z) => a.title > z.title ? -1 : 1);
//   }
// };
// estas funciones son de ejemplo

// const myCopy = films
// const myCopy1 = Array.from(films)
// const myCopy2 = [...films]
// console.log(myCopy2)

let imagen=document.getElementById("imagen")

export const mostrarPersonajes = (films) => {
  let personajes = [];
  console.log('peliculas',films)
  for (let i = 0 ; i< films.length ; i++){
    personajes = personajes.concat(films[i].people)
  }
  console.log('personajes',personajes)
  for (let i = 0 ; i< personajes.length ; i++){
    imagen.innerHTML+=`<div>${personajes[i].name} <img src='${personajes[i].img}'> </div>`;
  }
  console.log('personajes mostrados')
  return personajes;
};

export const ordenarPersonajes = (personajes) => {
  personajes.sort((a,b) =>{
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  })
  console.log('personajes ordenados',personajes)
  for(let i=0 ; i< personajes.length; i++){
    imagen.innerHTML+=`<div>${personajes[i].name} <img src='${personajes[i].img}'> </div>`;
  }
  console.log('personajes ordenados mostrados')
}


export const filtrarPersonajes = (personajes) => {
  const personajes_filtrado = personajes.filter(personajes => personajes.specie == 'Cat');
  return personajes_filtrado
}



// const personajes_filtrado = personajes.filter(personajes => personajes.specie == 'Cat');
// console.log('personajes filtrados filter', personajes_filtrado);

// personajes_filtrado.forEach(function(personajes){
//   imagen.innerHTML+= `<div>${personajes.name} <img src='${personajes.img}'> </div>`;
//   console.log('personajes filtrados en pantalla',personajes.name);
// })









