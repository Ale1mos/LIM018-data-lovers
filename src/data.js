// export const ordenarAZ = (films) =>{
//   films.sort((a,b) => {
//     if(a.title < b.title){
//       return -1;
//     }
//     if(a.title > b.title){
//       return 1;
//     }
//     return 0;
//   }) 
//   return films
// }

export const filtering = (array, element, condition)=> 
array.filter((a) => a[element] === condition);

export const ordenarAZ = (data, orden) => {
  if (orden === "A-Z") {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
  } else if (orden === "Z-A") {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
  }
};

export const filterDirector = (films,nameDirector) => {

  let result = films.filter(f => f.director == nameDirector);
  // let result = data.filter(movie => movie[category] === value);
  return result;
};
// prueba
// export const mostrarDirector = (films) => {
//   let directores = [];
//   console.log('peliculas',films)
//   for (let i = 0 ; i<films.length ; i++){
//     directores = directores.concat(films[i].director)
//   }
//   return directores;
// };



let imagen=document.getElementById("imagen")



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









