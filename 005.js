#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let turmaA = [
4.0, 4.8, 6.2, 7.7, 3.0, 5.5, 6.2, 1.5, 7.5, 4.0,
9.5, 8.1, 5.0, 7.4, 6.7, 6.4, 5.8, 7.0, 8.7, 8.5,
4.7, 5.1, 6.1, 8.7, 6.3, 7.5, 8.3, 3.5, 2.8, 4.5,
6.5, 7.5, 6.4, 4.8, 8.0, 8.7, 7.6, 2.0, 1.9, 5.6
];

turmaA.sort();
[classesA, NiA] = s.classesEFrequenciaAbsoluta(turmaA, 0, 2);

console.log("classes de A:");
console.log(classesA);
console.log("Frequencia Acumulada A:", NiA);

let FiA = s.frequenciaRelativa(NiA);
console.log("Frequencia relativa A:", FiA);

let XiA = s.mediaDasClasses(classesA);
console.log("XiA:", XiA);

let mediaA = s.mediaPorFrequenciaAbsoluta(XiA, NiA);
console.log("media A:", mediaA);

let XiAMenosXa = XiA.map( xi => (xi - mediaA).toFixed(2) );
console.log("Xi-X:", XiAMenosXa);

let XiAMenosXa2 = XiAMenosXa.map( v => (v**2).toFixed(4) );
console.log("(Xi-Xa)²:", XiAMenosXa2);

let XiAMenosXa2Ni = s.produtoDeVetores(XiAMenosXa2, NiA);
console.log("(Xi-Xa)²Ni:", XiAMenosXa2Ni);

console.log("soma (Xi-Xa)²Ni:", s.somatorio(XiAMenosXa2Ni));

let bA = s.desvioPadraoPorFrequenciaAbsoluta(XiA, NiA);
console.log("desvio Padrao A:", bA);

let turmaB = [
9.0, 0.3, 8.7, 7.6, 6.0, 5.7, 8.8, 3.7, 2.0, 2.2,
8.4, 3.1, 7.8, 4.2, 9.8, 6.5, 1.2, 2.4, 4.0, 3.1,
7.5, 8.7, 1.8, 2.4, 6.0, 3.2, 5.2, 5.5, 5.9, 6.9,
8.2, 7.9, 8.5, 8.8, 7.0, 6.3, 9.3, 7.5, 8.6, 9.8
];

turmaB.sort();
[classesB, NiB] = s.classesEFrequenciaAbsoluta(turmaB, 0, 2);

console.log("classes de B:");
console.log(classesB);
console.log("Frequencia Acumulada:", NiB);

let FiB = s.frequenciaRelativa(NiB);
console.log("Frequencia relativa B:", FiB);

let XiB = s.mediaDasClasses(classesB);
console.log("XiB:", XiB);

let mediaB = s.mediaPorFrequenciaAbsoluta(XiB, NiB);
console.log("media B:", mediaB);

let XiBMenosXb = XiB.map( xi => (xi - mediaB).toFixed(2) );
console.log("Xi-Xb:", XiBMenosXb);

let XiBMenosXb2 = XiBMenosXb.map( v => (v**2).toFixed(4) );
console.log("(Xi-Xb)²:", XiBMenosXb2);

let XiBMenosXb2Ni = s.produtoDeVetores(XiBMenosXb2, NiB);
console.log("(Xi-Xb)²Ni:", XiBMenosXb2Ni);

console.log("soma (Xi-Xb)²Ni:", s.somatorio(XiBMenosXb2Ni));

let bB = s.desvioPadraoPorFrequenciaAbsoluta(XiB, NiB);
console.log("desvio Padrao B:", bB);