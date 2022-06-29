
export const obtenerPersonajes = (films) => {
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













