#!/usr/bin/node

const s = require('./bsj.estatistica.js');

let pais = [
	"China", "Japao", "EUA", "India", "Indonesia", "Russia",
	"Correia do Sul", "Filipinas", "Franca", "Espanha"
];

let quantPeixes = [
	30.0, 8, 6, 4, 4, 3, 2, 2, 2, 2
];

console.log("somatorio:", s.somatorio(quantPeixes));
console.log("media:", s.media(quantPeixes));
console.log("mediana:", s.mediana(quantPeixes));
console.log("moda:", s.moda(quantPeixes));