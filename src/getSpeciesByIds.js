const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  const getSpecies = ids.map((elementMap) => {
    const specieFind = species.find((elementFind) => elementFind.id === elementMap);
    return specieFind;
  });
  return getSpecies;
};

module.exports = getSpeciesByIds;
