
export const obtenerPersonajes = (films) => {
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
// export const filterDirector = (films,nameDirector) => {

//   let result = films.filter(f => f.director == nameDirector);
//   // let result = data.filter(movie => movie[category] === value);
//   return result;
// };

// let imagen=document.getElementById("imagen")

// export const mostrarPersonajes = (films) => {
  let personajes = [];
  console.log('peliculas',films)
  for (let i = 0 ; i< films.length ; i++){
    personajes = personajes.concat(films[i].people)
  }
  console.log('personajes',personajes)
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
}


export const filtrarPersonajes = (personajes,especie) => {
  const personajes_filtrado = personajes.filter(personajes => personajes.specie == especie);
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}













