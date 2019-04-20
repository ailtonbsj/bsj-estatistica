function classesEFrequenciaAbsoluta(vetorBruto, inferiorInicial, amplitude) {
	let classes = [];
	let Ni = [];
	let cont = 0;

	vetorBruto.sort();
	vetorBruto.map(val => {
		if( ! (val >= inferiorInicial && val < inferiorInicial+amplitude) ) {
			cont++;
			inferiorInicial += amplitude;
		}
		if(classes[cont] == null) {
			classes[cont] = { inferior: inferiorInicial, superior: inferiorInicial + amplitude};
			Ni[cont] = 0;
		}
		Ni[cont] += 1;
	});
	return [classes, Ni];
}

function mediaDasClasses(vetorClasses) {
	return vetorClasses.map(obj => (obj.inferior+obj.superior)/2);
}

function amplitudeDasClasses(vetorClasses) {
	return vetorClasses.map(obj => obj.superior-obj.inferior);
}

function obterClassePorValor(vetorClasses, valor, string) {
	valor = parseFloat(valor).toFixed(2);
	string = string || false;
	for(let i = 0; i < vetorClasses.length; i++) {
		if(vetorClasses[i].inferior <= valor
			&& vetorClasses[i].superior > valor) {
			if(string)
				return vetorClasses[i].inferior+" ├── "
				+vetorClasses[i].superior;
			else return i;
		}
	}
}

function obterIndicePorValor(vetor, valor) {
	for(let i = 0; i < vetor.length; i++) {
		if(vetor[i] >= valor) {
			return i;
		}
	}
}

function somatorio(vetor) {
	return vetor.reduce((acc, val) => acc+val);
}

function produtoDeVetores(vetor1, vetor2) {
	return vetor1.map((v, i) => v*vetor2[i]);
}

function frequenciaRelativa(vetorAbsoluto) {
	let k = somatorio(vetorAbsoluto);
	return vetorAbsoluto.map(ni => ni/k);
}

function frequenciaAcumulada(vetorAbsoluto) {
	let acc = 0;
	return vetorAbsoluto.map(ni => (acc = acc+ni));
}

function mediaPorFrequenciaAbsoluta(Xi, Ni) {
	return somatorio(produtoDeVetores(Xi,Ni))/somatorio(Ni);
}

function mediaPorFrequenciaRelativa(Xi, Fi) {
	return somatorio(produtoDeVetores(Xi, Fi));
}

function mediana(classes, Ni) {
	let somaNi = somatorio(Ni);
	let Fc = frequenciaAcumulada(Ni);
	let index = obterIndicePorValor(Fc, somaNi/2);
	let limInf = classes[index].inferior;
	let diff = somaNi/2 - Fc[index-1];
	let amp = amplitudeDasClasses(classes)[index];
	return limInf + ( diff * amp / Ni[index] );
}

function varianciaPorFrequenciaAbsoluta(Xi, Ni) {
	let media = mediaPorFrequenciaAbsoluta(Xi, Ni);
	let diff = Xi.map(xi => xi - media);
	let s = diff.map((v, i) => v * v * Ni[i] );
	let dem = somatorio(Ni);
	return somatorio(s)/dem;
}

function varianciaPorFrequenciaRelativa(Xi, Fi) {
	let media = mediaPorFrequenciaRelativa(Xi, Fi);
	let diff = Xi.map(xi => xi - media);
	let s = diff.map((v, i) => v * v * Fi[i] );
	return somatorio(s);
}

function desvioPadraoPorFrequenciaAbsoluta(Xi, Ni) {
	return Math.sqrt(varianciaPorFrequenciaAbsoluta(Xi, Ni));
}

function desvioPadraoPorFrequenciaRelativa(Xi, Fi) {
	return Math.sqrt(varianciaPorFrequenciaRelativa(Xi, Fi));
}

module.exports = {
	mediaDasClasses,
	produtoDeVetores,
	somatorio,
	mediaPorFrequenciaAbsoluta,
	mediaPorFrequenciaRelativa,
	amplitudeDasClasses,
	obterClassePorValor,
	frequenciaAcumulada,
	frequenciaRelativa,
	mediana,
	varianciaPorFrequenciaAbsoluta,
	desvioPadraoPorFrequenciaAbsoluta
}
