const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const Objspecie = species.find((element) => element.name === animal);
  const { residents } = Objspecie;
  const animais = residents.every((element) => element.age >= age);
  return animais;
};
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
