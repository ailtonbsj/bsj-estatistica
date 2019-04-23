#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let alturas = [
	{ inferior: 1.64, superior: 1.70 },
	{ inferior: 1.70, superior: 1.76 },
	{ inferior: 1.76, superior: 1.82 },
	{ inferior: 1.82, superior: 1.88 },
	{ inferior: 1.88, superior: 1.94 },
	{ inferior: 1.94, superior: 2.00 }
];

let numAtletas = [8, 88, 104, 136, 40, 24];

let amplitude = s.amplitudeDasClasses(alturas)[0];
console.log("Amplitudes:", amplitude.toFixed(2) );

let Xi = s.mediaDasClasses(alturas);
console.log("Media das Classes:", Xi);

let XiNi = s.produtoDeVetores(Xi, numAtletas);
console.log("XiNi:", XiNi.map( v => v.toFixed(2) ) );

console.log("Somatorio XiNi:", s.somatorio(XiNi));

console.log("Somatorio Ni:", s.somatorio(numAtletas));

let media = s.mediaPorFrequenciaAbsoluta(Xi, numAtletas);
console.log("Media:", media.toFixed(2) );

console.log("Classe modal:", 
			s.obterClassesModais(alturas, numAtletas, true) );

let Fac = s.frequenciaAcumulada(numAtletas);
console.log("Frequencia Acumulada:", Fac);

console.log("Mediana:", s.medianaPorFrequenciaAbsoluta(alturas, numAtletas) );

let XiMenosMedia = Xi.map( xi => (xi - media).toFixed(2) );
console.log("Xi-X:", XiMenosMedia);

let XiMenosMedia2 = XiMenosMedia.map(v => v**2);
console.log("(Xi-X)²:", XiMenosMedia2.map(v => v.toFixed(4)) );

let XiMenosMedia2Ni = s.produtoDeVetores(XiMenosMedia2, numAtletas);
console.log("(Xi-X)²Ni:", XiMenosMedia2Ni.map(v => v.toFixed(4)) );

let variancia = s.varianciaPorFrequenciaAbsoluta(Xi, numAtletas);
console.log("variancia:", variancia);

let desvio = s.desvioPadraoPorFrequenciaAbsoluta(Xi, numAtletas);
console.log("desvio padrao:", desvio);