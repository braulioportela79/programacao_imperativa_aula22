let Pessoa = function (altura, sexo) {
    this.altura = altura;
    this.sexo = sexo;
};

Pessoa.mediaAlturaMulheres = obj => {
    let arrayMulheres = obj.filter(e => e.sexo == 'F');
    let alturaMulheres = arrayMulheres.map(e => e.altura);
    let somaAlturaMulheres = 0;
    for (let i = 0; i < alturaMulheres.length; i++) {
        somaAlturaMulheres += alturaMulheres[i] / alturaMulheres.length;
    };
    console.log(`A média de altura das mulheres é ${somaAlturaMulheres.toFixed(2)}m.`);
};

Pessoa.maiorMenorAltura = obj => {
    let arrayAlturas = obj.map(e => e.altura);
    let menor = Math.min(...arrayAlturas).toFixed(2);
    let maior = Math.max(...arrayAlturas).toFixed(2);
    console.log(`A menor altura é ${menor}m.`);
    console.log(`A maior altura é ${maior}m.`);
};

Pessoa.qtdHomens = obj => {
    let arrayHomens = obj.filter(e => e.sexo == 'M');
    console.log(`O número de homens é de ${arrayHomens.length}.`);
};


module.exports = Pessoa;