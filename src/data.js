
export const ordenarAZ = (films) =>{
  films.sort((a,b) => {
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;
  }) 
  return films
}
export const filterDirector = (films,nameDirector) => {

  let result = films.filter(f => f.director == nameDirector);
  // let result = data.filter(movie => movie[category] === value);
  return result;
};

