// const data = require('../data/zoo_data');

// const { species } = data;

// const objGeral1 = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };

// const objGeral2 = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };

// const filtraElementosPorLocal = (local) => {
//   if (local === 'NE') {
//     const ne = species.filter((element) => element.location === 'NE');
//     return ne;
//   } else if (local === 'NW') {
//     const nw = species.filter((element) => element.location === 'NW');
//     return nw;
//   } else if (local === 'SE') {
//     const se = species.filter((element) => element.location === 'SE');
//     return se;
//   } else {
//     const sw = species.filter((element) => element.location === 'SW');
//     return sw;
//   }
// };

// const filtraNomesEspecies = () => {
//   const objAnimais = {
//     NE: filtraElementosPorLocal('NE').map((element) => element.name),
//     NW: filtraElementosPorLocal('NW').map((element) => element.name),
//     SE: filtraElementosPorLocal('SE').map((element) => element.name),
//     SW: filtraElementosPorLocal('SW').map((element) => element.name),
//   };
//   return objAnimais;
// };

// const soIncludesTrue = () => {
//   let animais = [];
//   filtraElementosPorLocal('NE').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral1.NE.push({[element.name]: animais});
//   });
//   filtraElementosPorLocal('NW').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral1.NW.push({[element.name]: animais});
//   });
//   filtraElementosPorLocal('SE').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral1.SE.push({[element.name]: animais});
//   });
//   filtraElementosPorLocal('SW').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral1.SW.push({[element.name]: animais});
//   });
//   return objGeral1;
// };

// const ordenaNomes = () => {
//   let animais = [];
//   filtraElementosPorLocal('NE').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral2.NE.push({[element.name]: animais.sort()});
//   });
//   filtraElementosPorLocal('NW').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral2.NW.push({[element.name]: animais.sort()});
//   });
//   filtraElementosPorLocal('SE').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral2.SE.push({[element.name]: animais.sort()});
//   });
//   filtraElementosPorLocal('SW').forEach((element) => {
//     animais = element.residents.map((animais) => animais.name);
//     objGeral2.SW.push({[element.name]: animais.sort()});
//   });
//   return objGeral2;
// }

// const getAnimalMap = (options) => {
//   if (!options) { return filtraNomesEspecies(); }
//   const includes = Object.keys(options);
//   if (includes[0] !== 'includeNames') {
//     return filtraNomesEspecies();
//   } else if (includes[0] === 'includeNames' && includes.length === 1) {
//     return soIncludesTrue();
//   } else if (includes[1] === 'sorted') {
//     return ordenaNomes();
//   }
// };

// console.log(soIncludesTrue());
// module.exports = getAnimalMap;
