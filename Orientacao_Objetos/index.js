class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }    
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Jonatas";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const ContaCorrenteJonatas = new ContaCorrente();
ContaCorrenteJonatas.saldo = 0;
ContaCorrenteJonatas.agencia = 1001;

console.log(ContaCorrenteJonatas.saldo);
ContaCorrenteJonatas.saldo = 100;
console.log(ContaCorrenteJonatas.saldo);
ContaCorrenteJonatas.sacar(50);


console.log(ContaCorrenteJonatas.saldo);
console.log(cliente1);
console.log(cliente2);