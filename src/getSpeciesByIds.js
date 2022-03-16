const data = require('../data/zoo_data');

// const getSpeciesByIds = (...ids) => {
//   const especies = [];
//   if (ids === undefined) {
//     return especies;
//   }
//   const {species} = data;
//   const result = ids.forEach((elemento) => {
//     console.log(elemento);
//     species.filter((element) => element.id === elemento)
    
//   })
//   console.log(elemento);
//   return result;
// }

const getSpeciesByIds = (...ids) => {
  const {species} = data;
  const listaDeEspecies = [];
  if (ids === undefined) {
    return listaDeEspecies;
  }
 for (let i = 0; i < ids.length; i += 1) {
   for (let i2 = 0; i2 < species.length; i2 += 1) {
     if (ids[i] === species[i2].id) {
      listaDeEspecies.push(species[i2])
     }
   }
 }
 return listaDeEspecies
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;

// const result = species.filter((element) => element.id === ids);
// console.log();