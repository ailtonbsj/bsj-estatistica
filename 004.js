#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let pontuacao = [
	{inferior: 10, superior: 30},
	{inferior: 30, superior: 50},
	{inferior: 50, superior: 70},
	{inferior: 70, superior: 90}
];

let cidadeAPorc = [45, 20, 25, 10];

let cidadeBPorc = [23, 46, 29, 2];

//s.graficoDeBarras("Cidade A", pontuacao, cidadeAPorc);
//s.graficoDeBarras("Cidade B", pontuacao, cidadeBPorc);

let Xi = s.mediaDasClasses(pontuacao);
console.log("Xi:", Xi);

let mediaA = s.mediaPorFrequenciaAbsoluta(Xi, cidadeAPorc);
console.log("media A:", mediaA);

let mediaB = s.mediaPorFrequenciaAbsoluta(Xi, cidadeBPorc);
console.log("media B:", mediaB);

console.log("Diferença:", Math.abs(mediaA-mediaB));