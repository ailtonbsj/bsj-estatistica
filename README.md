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

### 005

Um professor aplicou um teste de raciocínio lógico nas suas duas turmas do 3o ano do ensino médio. As notas obtidas pelos alunos são dadas a seguir:

```js
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
```

a) Em cada turma, divida os alunos em cinco categorias de aproveitamento - péssimo, fraco, regular, bom e ótimo -, estabelecendo os limites de cada uma. A seguir, faça uma tabela de frequências.

b) Utilizando apenas os dados agrupados, responda:

- Qual turma apresentou melhor aproveitamento?
- Qual turma apresentou desempenho mais regular?

### 006

As tabelas seguintes relacionam os países com maior consumo anual de peixe.

```js
let pais = [
	"China", "Japao", "EUA", "India", "Indonesia", "Russia",
	"Correia do Sul", "Filipinas", "Franca", "Espanha"
];

let quantPeixes = [
	30, 8, 6, 4, 4, 3, 2, 2, 2, 2
];
```

a) Calcule a média, a mediana e a moda dos dados apresentados. Por que a média é bem maior que as outras duas medidas?

b) Sabendo que a população da China é  1,285 bilhão de habitantes e a da Espanha é 39,9 milhões de habitantes, mostre que o consumo per capita anual na Espanha é maior que o dobro do consumo per capita na China.

## 007

Um radar fotográfico, instalado em uma rodovia na qual o limite de velocidade é 100 km/h, registrou em uma semana x multas por excesso de velocidade, assim distribuídas:

```js
let velocidade = [
	{ inferior: 101, superior: 108 },
	{ inferior: 108, superior: 115 },
	{ inferior: 115, superior: 122 },
	{ inferior: 122, superior: 129 },
	{ inferior: 129, superior: 136 }
];

let ocorrencias = [34, 41, 35, 22, 18];
```

a) Determine o valor de x.

b) Calcule a média, a classe modal, a mediana e o desvio padrão da velocidade em que estavam os veículos quando foram multados.

c) Se o valor das multas varia de acordo com a faixa de velocidade ultrapassada, começando por R$180,00 e aumentando sempre 20% em relação à faixa anteiror, determine o valor das multas aplicadas.
