#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let velocidade = [
	{ inferior: 101, superior: 108 },
	{ inferior: 108, superior: 115 },
	{ inferior: 115, superior: 122 },
	{ inferior: 122, superior: 129 },
	{ inferior: 129, superior: 136 }
];

let ocorrencias = [34, 41, 35, 22, 18];

console.log("Somatorio Ni:", s.somatorio(ocorrencias));

let amplitudes = s.amplitudeDasClasses(velocidade);
console.log("amplitudes:", amplitudes);

let Xi = s.mediaDasClasses(velocidade);
console.log("Xi:", Xi);

let Fi = s.frequenciaRelativa(ocorrencias);
console.log("Fi:", Fi.map( fi => fi.toFixed(3) ) );

let XiFi = s.produtoDeVetores(Xi, Fi);
console.log("XiFi:", XiFi.map( v => v.toFixed(2) ) );

console.log("soma de XiFi:", s.somatorio(XiFi));

let media = s.mediaPorFrequenciaRelativa(Xi, Fi);
console.log("Media:", media);

let modals = s.obterClassesModais(velocidade, ocorrencias, true);
console.log("Classe modal:", modals);

let Fac = s.frequenciaAcumulada(ocorrencias);
console.log("Fac:", Fac);

let mediana = s.medianaPorFrequenciaAbsoluta(velocidade, ocorrencias);
console.log("Mediana:", mediana);

let XiMenosX = Xi.map(xi => (xi - media).toFixed(2) );
console.log("Xi-X:", XiMenosX);

let XiMenosX2 = XiMenosX.map(v => (v**2).toFixed(2) );
console.log("(Xi-X)²:",XiMenosX2);

let XiMenosX2Ni = s.produtoDeVetores(XiMenosX2, ocorrencias);
console.log("(Xi-X)²Ni:",XiMenosX2Ni.map( v => v.toFixed(2) ));

console.log("soma (Xi-X)²Ni:", s.somatorio(XiMenosX2Ni));

let desvio = s.desvioPadraoPorFrequenciaAbsoluta(Xi, ocorrencias);
console.log("desvio padrao:", desvio);

let multas = new Array(5).fill(0);
for(let i in multas){
	multas[i] = (i == 0) ? 180 : multas[i-1]*1.2;
}
console.log("multas:", multas);

let multasOcorrencias = s.produtoDeVetores(multas, ocorrencias);
console.log("multas x ocorrencias:", multasOcorrencias);

let somaMultasOcorrencias = s.somatorio(multasOcorrencias);
console.log("soma MultasOcorrencias:", somaMultasOcorrencias);

console.log("media das multas:", somaMultasOcorrencias / s.somatorio(ocorrencias) );

let mediaMultas = s.mediaPonderada(ocorrencias, multas);
console.log("Media Ponderada:", mediaMultas);