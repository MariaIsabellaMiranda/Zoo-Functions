const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const idades = data.species.forEach((especie) => {
    especie.age
  })
  // every((age) => data.species.animal)
  console.log(idades);
}
getAnimalsOlderThan()

module.exports = getAnimalsOlderThan;
