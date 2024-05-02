console.clear();
const teclado = require (`prompt-sync`)();

let n1 : number = parseFloat(teclado(`Digite o primeiro numero: `));
let n2 : number = parseFloat(teclado(`Digite o segundo numero: `));

console.log(`|-------------------------|`);
console.log(`|-------Iniciando...------|`);
console.log(`|-------------------------|`);

function sair():void{
    console.clear();
    console.log(`Finalizando Calculadora...`);
    process.exit(0);
}  

function menu(): void{
    console.clear();
    console.log(`|----------------------------|`);
    console.log(`|------ As operação ---------|`);
    console.log(`|---- + ---> soma -----------|`);
    console.log(`|---- - ---> subtração ------|`);
    console.log(`|---- / ---> divisão --------|`);
    console.log(`|---- * ---> multiplicação --|`);
    console.log(`|----------------------------|`);
    console.log(`|----- s --> Sair -----------|`);
    let operacao : string = teclado(`Escolha a operação: `);
    switch(operacao){
        case `+` : soma(); break;
        case `-` : subtracao(); break;
        case `*` : multiplicacao(); break;
        case `/` : divisao(); break;
        case `s`  : sair(); break;
    }
}

function soma(): void{
    let resultado : number = n1 + n2
    console.log(`A Soma de ${n1} e ${n2} é ${resultado}`);
    console.log(`APERTER ENTER PARA FINALIZAR`);
    teclado();
}

function subtracao(): void{
    let resultado : number = n1 - n2
    console.log(`A Subtração de ${n1} e ${n2} é ${resultado}`);
    console.log(`APERTER ENTER PARA FINALIZAR`);
    teclado();
}

function multiplicacao(): void{
    let resultado : number = n1 * n2
    console.log(`A Multiplicação de ${n1} e ${n2} é ${resultado}`);
    console.log(`APERTER ENTER PARA FINALIZAR`);
    teclado();
}

function divisao(): void{
    let resultado : number = n1/n2
    console.log(`A Divisão de ${n1} e ${n2} é ${resultado}`);
    console.log(`APERTER ENTER PARA FINALIZAR`);
    teclado();
}
menu();