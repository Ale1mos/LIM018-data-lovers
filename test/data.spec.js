// import { filtrarPersonajes } from '../src/data.js';

import { obtenerPersonajes } from '../src/data.js';

// const arreglo = [{specie: 'Cat'},{specie: 'pizza'}]

// describe('filtrarPersonajes', () => {
//   it('is a function', () => {
//     expect(typeof filtrarPersonajes).toBe('function');
//   });

//   it('should filter by cat', () => {
//     expect(filtrarPersonajes(arreglo)).toEqual([{specie:'Cat'}]);
//   });
// });


describe('obtenerPersonajes', () => {
  it('is a function', () => {
    expect(typeof obtenerPersonajes).toBe('function');
  });

  it('returns characters', () => {
    const films = [{'people': [{'name': 'B'}]},{'people': [{'name': 'A'}]}]
    expect(obtenerPersonajes(films)).toEqual([{'name': 'B'},{'name': 'A'}]);
  });
})

///para la funcion obtnener hay que llamara la funcion xq no retorna algo
// it('returns characters', () => {
//   const films = [{'people': [{'name': 'B'}]},{'people': [{'name': 'A'}]}]
//   ordenarPersonajes(personajes)
//   expect(personajes).toEqual
// expect(obtenerPersonajes(films)).toEqual([{'name': 'B'},{'name': 'A'}]);





