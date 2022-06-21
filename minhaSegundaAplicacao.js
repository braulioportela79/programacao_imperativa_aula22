// Agora que você já criou estes códigos nas aulas 19 e 20, recrie-os de forma modular. Aplicando os conceitos de objetos literais e módulos. Boa sorte!!
let pessoa = require('./pessoa');

// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
let grupoPessoa = require('./grupoPessoa');

// a maior e a menor altura do grupo;
pessoa.maiorMenorAltura(grupoPessoa);

// a média de altura das mulheres;
pessoa.mediaAlturaMulheres(grupoPessoa);

// o número de homens.
pessoa.qtdHomens(grupoPessoa);