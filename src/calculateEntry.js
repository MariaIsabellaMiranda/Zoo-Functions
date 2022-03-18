const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const child = entrants.filter((visitante) => visitante.age < 18);
  const adult = entrants.filter((visitante) => visitante.age >= 18 && visitante.age < 50);
  const senior = entrants.filter((visitante) => visitante.age >= 50);
  const idades = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return idades;
};

const calculateEntry = (entrants) => {
  if (!entrants) { return 0; }
  if (Object.keys(entrants).length === 0) { return 0; }
  const { child, adult, senior } = countEntrants(entrants);
  const valor = (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);
  return valor;
};

module.exports = { calculateEntry, countEntrants };
