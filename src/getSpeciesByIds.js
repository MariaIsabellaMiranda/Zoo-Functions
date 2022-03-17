const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  const getSpecies = ids.map((elementMap) => {
    const specieFind = species.find((elementFind) => elementFind.id === elementMap);
    return specieFind;
  });
  return getSpecies;
};

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
