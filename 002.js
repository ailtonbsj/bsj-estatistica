#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let colesterol = [
	{inferior: 140, superior: 180},
	{inferior: 180, superior: 220},
	{inferior: 220, superior: 260},
	{inferior: 260, superior: 300},
	{inferior: 300, superior: 340}
];

let numFuncionarios = [21, 45, 73, 34, 27];

console.log("somatorio:", s.somatorio(numFuncionarios));

let Fac = s.frequenciaAcumulada(numFuncionarios);
console.log("Fac:", Fac);

console.log( "Amplitudes:", s.amplitudeDasClasses(colesterol) );

console.log( "mediana:", s.medianaPorFrequenciaAbsoluta(colesterol, numFuncionarios) );

let Xi = s.mediaDasClasses(colesterol);
console.log("Xi:", Xi);

let Fi = s.frequenciaRelativa(numFuncionarios);
console.log("Fi:", Fi);

let XiFi = s.produtoDeVetores(Xi, Fi);
console.log("XiFi:", XiFi);

let media = s.mediaPorFrequenciaRelativa(Xi,Fi);
console.log(media);