#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let turmaA = [
4.0, 4.8, 6.2, 7.7, 3.0, 5.5, 6.2, 1.5, 7.5, 4.0,
9.5, 8.1, 5.0, 7.4, 6.7, 6.4, 5.8, 7.0, 8.7, 8.5,
4.7, 5.1, 6.1, 8.7, 6.3, 7.5, 8.3, 3.5, 2.8, 4.5,
6.5, 7.5, 6.4, 4.8, 8.0, 8.7, 7.6, 2.0, 1.9, 5.6
];

let turmaB = [
9.0, 0.3, 8.7, 7.6, 6.0, 5.7, 8.8, 3.7, 2.0, 2.2,
8.4, 3.1, 7.8, 4.2, 9.8, 6.5, 1.2, 2.4, 4.0, 3.1,
7.5, 8.7, 1.8, 2.4, 6.0, 3.2, 5.2, 5.5, 5.9, 6.9,
8.2, 7.9, 8.5, 8.8, 7.0, 6.3, 9.3, 7.5, 8.6, 9.8
];

turmaA.sort();
[classesA, NiA] = s.classesEFrequenciaAbsoluta(turmaA, 0, 2);

console.log("classes de A:");
console.log(classesA);
console.log("Frequencia Acumulada A:", NiA);

let FiA = s.frequenciaRelativa(NiA);
console.log("Frequencia relativa A:", FiA);


turmaB.sort();
[classesB, NiB] = s.classesEFrequenciaAbsoluta(turmaB, 0, 2);

console.log("classes de B:");
console.log(classesB);
console.log("Frequencia Acumulada:", NiB);

let FiB = s.frequenciaRelativa(NiB);
console.log("Frequencia relativa B:", FiB);

let XiA = s.mediaDasClasses(classesA);
console.log("XiA:", XiA);

console.log("media A:", s.mediaPorFrequenciaAbsoluta(XiA, NiA));

let XiB = s.mediaDasClasses(classesB);
console.log("XiB:", XiB);

console.log("media B:", s.mediaPorFrequenciaAbsoluta(XiB, NiB));

let bA = s.desvioPadraoPorFrequenciaAbsoluta(XiA, NiA);
console.log("desvio Padrao A:", bA);

let bB = s.desvioPadraoPorFrequenciaAbsoluta(XiB, NiB);
console.log("desvio Padrao A:", bB);