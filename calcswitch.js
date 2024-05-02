console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeiro numero: "));
var n2 = parseFloat(teclado("Digite o segundo numero: "));
console.log("|-------------------------|");
console.log("|-------Iniciando...------|");
console.log("|-------------------------|");
function sair() {
    console.clear();
    console.log("Finalizando Calculadora...");
    process.exit(0);
}
function menu() {
    console.clear();
    console.log("|----------------------------|");
    console.log("|------ As opera\u00E7\u00E3o ---------|");
    console.log("|---- + ---> soma -----------|");
    console.log("|---- - ---> subtra\u00E7\u00E3o ------|");
    console.log("|---- / ---> divis\u00E3o --------|");
    console.log("|---- * ---> multiplica\u00E7\u00E3o --|");
    console.log("|----------------------------|");
    console.log("|----- s --> Sair -----------|");
    var operacao = teclado("Escolha a opera\u00E7\u00E3o: ");
    switch (operacao) {
        case "+":
            soma();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
        case "s":
            sair();
            break;
    }
}
function soma() {
    var resultado = n1 + n2;
    console.log("A Soma de ".concat(n1, " e ").concat(n2, " \u00E9 ").concat(resultado));
    console.log("APERTER ENTER PARA FINALIZAR");
    teclado();
}
function subtracao() {
    var resultado = n1 - n2;
    console.log("A Subtra\u00E7\u00E3o de ".concat(n1, " e ").concat(n2, " \u00E9 ").concat(resultado));
    console.log("APERTER ENTER PARA FINALIZAR");
    teclado();
}
function multiplicacao() {
    var resultado = n1 * n2;
    console.log("A Multiplica\u00E7\u00E3o de ".concat(n1, " e ").concat(n2, " \u00E9 ").concat(resultado));
    console.log("APERTER ENTER PARA FINALIZAR");
    teclado();
}
function divisao() {
    var resultado = n1 / n2;
    console.log("A Divis\u00E3o de ".concat(n1, " e ").concat(n2, " \u00E9 ").concat(resultado));
    console.log("APERTER ENTER PARA FINALIZAR");
    teclado();
}
menu();
