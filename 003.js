#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let populacao = [ 66.4, 68.0, 89.0, 74.8, 67.1, 71.5, 95.7, 79.5, 87.9,
				  59.5, 79.4, 84.1, 82.0, 66.5, 71.1, 81.4, 76.5, 62.9,
				  96.0, 73.3, 81.7, 64.1, 76.1, 78.7, 93.4, 71.4, 74.3];

[classes, Ni] = s.classesEFrequenciaAbsoluta(populacao, 59, 10);
console.log("Classes:");
console.log(classes);
console.log("Frequencia Absoluta:", Ni);

let Fi = s.frequenciaRelativa(Ni);
console.log("Frequencia Relativa:", Fi.map( v => v.toFixed(2) ) );

let Xi = s.mediaDasClasses(classes);
console.log("media das classes:", Xi);

let XiFi = s.produtoDeVetores(Xi, Fi);
console.log("XiFi:", XiFi.map(v => v.toFixed(2)) );

let media = s.mediaPorFrequenciaAbsoluta(Xi, Ni).toFixed(1);
console.log("media:",  media );

let XiMenosMedia = Xi.map(xi => xi - media);
console.log("Xi-X:", XiMenosMedia);

let XiMenosMedia2 = XiMenosMedia.map(v => v**2);
console.log("(Xi-X)²:", XiMenosMedia2 );

let XiMenosMedia2Ni = s.produtoDeVetores(XiMenosMedia2, Ni);
console.log("(Xi-X)²Ni:", XiMenosMedia2Ni);

console.log("soma de (Xi-X)²Ni:", s.somatorio(XiMenosMedia2Ni));

console.log("Variancia:", s.varianciaPorFrequenciaRelativa(Xi, Fi) );

let desvio = s.desvioPadraoPorFrequenciaRelativa(Xi, Fi);
console.log("Desvio Padrao:",  desvio);

media = parseFloat(media);
desvio = parseFloat(desvio);
let out = populacao.filter(v => !(v >= media-desvio && v <= media+desvio));
console.log("Foras do intervalo:", out);
console.log("Total foras:", out.length);