const data = require('../data/zoo_data');

const { species } = data;

const pegaEsSex = (obj) => {
  const { specie, sex } = obj;
  const nomeEspecie = species.find((nome) => nome.name === specie);
  const { residents } = nomeEspecie;
  const pegaPorSex = residents.filter((animais) => animais.sex === sex);
  return pegaPorSex.length;
};

const pegaEspecie = (es) => {
  const { specie } = es;
  const nomeEspecie = species.find((nome) => nome.name === specie);
  const { residents } = nomeEspecie;
  return residents.length;
};

const semArgumento = () => {
  const newObject = {};
  species.forEach((especies) => { newObject[especies.name] = especies.residents.length; });
  return newObject;
};

const countAnimals = (animal) => {
  if (!animal) {
    return semArgumento();
  }
  const valor = Object.values(animal);
  if (valor.length === 1) {
    return pegaEspecie(animal);
  }
  return pegaEsSex(animal);
};

module.exports = countAnimals;
