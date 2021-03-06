const ChartjsNode = require('chartjs-node');
const ChartDataLabels = require('chartjs-plugin-datalabels');

// Dados nao agrupados

function somatorio(vetor) {
	return vetor.reduce((acc, val) => acc+val);
}

function produtoDeVetores(vetor1, vetor2) {
	return vetor1.map((v, i) => v*vetor2[i]);
}

function media(vetor) {
	return somatorio(vetor) / vetor.length;
}

function mediaPonderada(pesos, vetor) {
	let produto = produtoDeVetores(pesos, vetor);
	let soma = somatorio(produto);
	return soma / somatorio(pesos);
}

function mediana(vetor) {
	let length = vetor.length;
	let i = Math.trunc(length/2);
	let v = [...vetor];
	v.sort((a, b) => a - b);
	if(length % 2) {
		return v[i];
	} else {
		return media( [ v[i], v[i-1] ] );
	}
}

function moda(vetor) {
	let v = [...vetor];
	let cont = {};
	v.map( i => cont[i] == null ? cont[i]=1 : cont[i]++ );
	let max = Number.NEGATIVE_INFINITY;
	let moda = [];
	for(let i in cont) {
		if(cont[i] > max) {
			moda = [];
			moda.push(parseFloat(i));
			max = cont[i];
		}
		else if(cont[i] == max) moda.push(parseFloat(i));
	}
	if(v.length == moda.length) moda = [];
	return moda;
}

function classesEFrequenciaAbsoluta(vetorBruto, inferiorInicial, amplitude) {
	let classes = [];
	let Ni = [];
	let cont = 0;

	vetorBruto.sort((a, b) => a - b);
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

// Dados agrupados

function amplitudeDasClasses(vetorClasses) {
	return vetorClasses.map(obj => obj.superior-obj.inferior);
}

function mediaDasClasses(vetorClasses) {
	return vetorClasses.map(obj => (obj.inferior+obj.superior)/2);
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

function obterClassesModais(classes, Ni, string) {
	string = string || false;
	let max = Number.NEGATIVE_INFINITY;
	let indexs = [];
	Ni.map( (obj, i) => {
		if(obj > max) {
			indexs = [];
			indexs.push(i);
			max = obj;
		} else if(obj == max) indexs.push(i);
	});
	if(Ni.length == indexs.length) indexs = [];
	let modals = classes.filter( (obj, i) => indexs.includes(i) );
	if(string)
		modals = modals.map(v => v.inferior+" ├── "+v.superior).join(', ');
	return modals;
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

function medianaPorFrequenciaAbsoluta(classes, Ni) {
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

function graficoDeBarras(titulo, classes, Ni){
	let labels = classes.map(v => v.inferior + ' ├── ' + v.superior);
	let myChartOptions = {
	    plugins: {
	        afterDraw: function (chart, easing) {
	            var self = chart.config;
	            var ctx = chart.chart.ctx;
	        },
	        datalabels: {
                color: 'black',
            }
	    },
	    scales: {
	        yAxes: [{
	            ticks: {
	                beginAtZero: true
	            }
	        }]
	    },
	}
	let chartNode = new ChartjsNode(600, 400);
	chartNode.drawChart({
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: titulo,
				data: Ni,
				backgroundColor: '#EE6384',
				borderColor: 'black',
				borderWidth: 2
			}]
		},
		plugins: [ChartDataLabels],
		options: myChartOptions,
	})
	.then(() => {
    	return chartNode.getImageBuffer('image/png');
	})
	.then(buffer => {
	    Array.isArray(buffer)
	    return chartNode.getImageStream('image/png');
	})
	.then(streamResult => {
	    streamResult.stream
	    streamResult.length
	    return chartNode.writeImageToFile('image/png', './'+titulo+'.png');
	})
	.then(() => {
		console.log("Imagem gerada: ", titulo+'.png');		
	});
}

module.exports = {
	somatorio,
	produtoDeVetores,
	media,
	mediaPonderada,
	mediana,
	moda,
	classesEFrequenciaAbsoluta,
	
	amplitudeDasClasses,
	mediaDasClasses,
	obterClassePorValor,
	obterIndicePorValor,
	obterClassesModais,
	frequenciaRelativa,
	frequenciaAcumulada,
	mediaPorFrequenciaAbsoluta,
	mediaPorFrequenciaRelativa,
	medianaPorFrequenciaAbsoluta,
	varianciaPorFrequenciaAbsoluta,
	varianciaPorFrequenciaRelativa,
	desvioPadraoPorFrequenciaAbsoluta,
	desvioPadraoPorFrequenciaRelativa,
	graficoDeBarras
}