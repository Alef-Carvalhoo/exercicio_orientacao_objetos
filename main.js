function Pessoa(nome, salario) { //função construtora
    this.nome = nome;
    let _salario = salario  //atributo privado (encapsulamento)

    //getters e setters
    this.getSalario = function() { //acesso ao atributo privado
        return _salario;
    }

    this.setSalario = function(valor) {  //verifica se o valor atribuido não será string e sim um número
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }
}

function Jogador (nome, cargo, salario) { //função construtora
    this.cargo = cargo

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.05; //setando novo salario
        this.setSalario (novoSalario);
    }

    Pessoa.call(this, nome, salario); //Herança
}

function Lutador (nome, estilo, salario) { //função construtora
    this.estilo = estilo;

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.1; //setando novo salario
        this.setSalario (novoSalario);
    }

    Pessoa.call(this, nome, salario); //Herança
}

function Corredor (nome, estilo, salario) { //função construtora
    this.estilo = estilo;

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.1; //setando novo salario
        this.setSalario (novoSalario);
    }

    Pessoa.call(this, nome, salario); //Herança
}

const jogador = new Jogador("Neymar", "Jogador de futebol", "100000000"); //instância
const lutador = new Lutador("MCgregor", "muay thai", "2000000"); //instância
const corredor = new Corredor("Usain Bolt", "100 metros", "300000"); //instância


console.log(jogador);
console.log(lutador);
console.log(corredor);


jogador.aumento()
console.log(jogador.getSalario());

lutador.aumento()
console.log(lutador.getSalario());

corredor.aumento()
console.log(corredor.getSalario());