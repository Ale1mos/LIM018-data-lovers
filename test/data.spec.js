import { filtrarPersonajes } from '../src/data.js';

const arreglo = [{specie: 'Cat'},{specie: 'pizza'}]

describe('filtrarPersonajes', () => {
  it('is a function', () => {
    expect(typeof filtrarPersonajes).toBe('function');
  });

  it('should filter by cat', () => {
    expect(filtrarPersonajes(arreglo)).toEqual([{specie:'Cat'}]);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
