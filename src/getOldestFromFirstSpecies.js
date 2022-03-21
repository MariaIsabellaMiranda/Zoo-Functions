const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

const getEspecie = (id) => {
  let especie = '';
  employees.forEach((element) => {
    if (element.id === id) {
      const [firstEspecie] = element.responsibleFor;
      especie = species.filter((element2) => element2.id === firstEspecie);
    }
  });
  return especie[0].residents;
};

function getOldestFromFirstSpecies(id) {
  let animal = getEspecie(id).map((element) => element.age);
  animal = Math.max(...animal);
  animal = getEspecie(id).find((element) => element.age === animal);
  animal = Object.values(animal);
  return animal;
}

module.exports = getOldestFromFirstSpecies;
