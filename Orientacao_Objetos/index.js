import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jonatas", 11122233309);
const cliente2 = new Cliente("Alice", 23322233309);
const ContaCorrenteJonatas = new ContaCorrente(1001, cliente1);

ContaCorrenteJonatas.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
ContaCorrenteJonatas.transferir(valor, conta2);

console.log(ContaCorrente.numContas);