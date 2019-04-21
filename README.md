# BSJ Estatística

Uma biblioteca javascript para Estatística Descritiva.

## Dependencias

```
sudo apt install libgif-dev
sudo apt install libjpeg-dev
```

## Exercícios de Estatística

### 001

As alturas de um grupo de atletas de um clube estão relacionadas na tabela seguinte:

```js
let altura = [
	{ inferior: 1.64, superior: 1.70 },
	{ inferior: 1.70, superior: 1.76 },
	{ inferior: 1.76, superior: 1.82 },
	{ inferior: 1.82, superior: 1.88 },
	{ inferior: 1.88, superior: 1.94 },
	{ inferior: 1.94, superior: 2.00 }
];

let numAtletas = [8, 88, 104, 136, 40, 24];
```

a) Determine a média, a classe modal e a mediana dos dados apresentados.

b) Encontre a variância e o desvio padrão desses dados.

### 002

Os 200 funcionários de uma empresa foram submetidos a exames clínicos para avaliação de saúde. Na tabela seguinte, aparece o resultado do exame de dosagem de colesterol.

```js
let colesterol = [
	{inferior: 140, superior: 180},
	{inferior: 180, superior: 220},
	{inferior: 220, superior: 260},
	{inferior: 260, superior: 300},
	{inferior: 300, superior: 340}
];

let numFuncionarios = [21, 45, 73, 34, 27];
```

a) Qual é a taxa mediana de colesterol, em mg, por dL de sangue?

b) O teste sugere que, se a taxa média de colesterol execeder 235 mg/dL de sangue, deve-se iniciar uma campanha de prevenção com os funcionários. Com base nesse exame, verifique se será necessário iniciar a campanha preventiva.

### 003

A seguir, são dados os percentuais da população dos Estados brasileiros que vive em áreas urbanas.

```js
let populacao = [ 66.4, 68.0, 89.0, 74.8, 67.1, 71.5, 95.7, 79.5, 87.9,
				  59.5, 79.4, 84.1, 82.0, 66.5, 71.1, 81.4, 76.5, 62.9,
				  96.0, 73.3, 81.7, 64.1, 76.1, 78.7, 93.4, 71.4, 74.3];
```

a) Agrupe essas informações em quatro intervalos, cada um com amplitude igual a 10, a partir do valor 59, e faça uma tabela de frequência.

b) Utilizando os dados agrupados, calcule a média e desvio padrão. Quantos valores não pertencem ao intervalo [media - desvioPadrao, media + desvioPadrao]?

### 004

Em um determinado Estado foi realizado nas suas duas maiores cidades, A e B, um levantamento sobre o grau de satisfação da população em relação à administração do governador. Um dos objetivos do levantamento era verificar se havia diferenças significativas quanto à opinião dos moradores das duas cidades.
Cada entrevistado atribuiu uma nota de 0 a 100 para expressar sua satisfação.
Adotou-se o seguinte critério de avaliação: caso a diferença entre as notas médias obtidas nas duas cidade não excedesse 5 (em módulo), a conclusão seria de que não havia diferenças significativas.
Com base nos dados apresentados a seguirm conclua se há divergẽncia entre a opinião dos moradores de uma cidade a outra.

```js
let pontuacao = [
	{inferior: 10, superior: 30},
	{inferior: 30, superior: 50},
	{inferior: 50, superior: 70},
	{inferior: 70, superior: 90}
];

let cidadeAPorc = [45, 20, 25, 10];

let cidadeBPorc = [23, 46, 29, 2];
```
