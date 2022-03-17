const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((pessoa) => pessoa.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const gerente = isManager(managerId);
  if (gerente === true) {
    const gerenciados = employees.filter((pessoas) => pessoas.managers.includes(managerId));
    return gerenciados.map((element) => `${element.firstName} ${element.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
