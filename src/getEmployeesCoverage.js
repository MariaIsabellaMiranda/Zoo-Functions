const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

const getPessoa = (id) => {
  let pessoa = '';
  const [nome] = Object.values(id);
  pessoa = employees.find((element) => Object.values(element).includes(nome));
  return pessoa;
};

const getLocation = (id) => {
  const locais = [];
  const { responsibleFor } = getPessoa(id);
  responsibleFor.forEach((elementMap) => {
    const localEspecie = species.find((elementSpecie) => elementMap === elementSpecie.id);
    locais.push(localEspecie.location);
  });
  return locais;
};

const getNames = (id) => {
  const nomes = [];
  const { responsibleFor } = getPessoa(id);
  responsibleFor.forEach((elementMap) => {
    const localEspecie = species.find((elementSpecie) => elementMap === elementSpecie.id);
    nomes.push(localEspecie.name);
  });
  return nomes;
};

const criaObjetoFinal = (nome) => {
  const { id, firstName, lastName } = getPessoa(nome);
  const objPessoa = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getNames(nome),
    locations: getLocation(nome),
  };
  return objPessoa;
};

const todosFuncionarios = () => {
  const megaArray = [];
  const arrayId = [];
  employees.forEach((elemntFor) => { arrayId.push({ id: elemntFor.id }); });
  arrayId.forEach((elemento) => {
    megaArray.push(criaObjetoFinal(elemento));
  });
  return megaArray;
};

function getEmployeesCoverage(id) {
  if (!id) { return todosFuncionarios(); }
  if (getPessoa(id) === undefined) { throw new Error('Informações inválidas'); }
  if (id) { return criaObjetoFinal(id); }
}

module.exports = getEmployeesCoverage;
