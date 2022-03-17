const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) { return {}; }
  const colaboradores = employees.find((pessoa) =>
    (pessoa.firstName === employeeName || pessoa.lastName === employeeName));
  return colaboradores;
};

module.exports = getEmployeeByName;
