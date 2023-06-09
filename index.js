//TRABALHO HEMOCENTRO

//Olá! Você foi contratado para desenvolver um sistema de cadastro de doadores de sangue para o Hemocentro da sua cidade, utilizando a linguagem 
//JavaScript e a função `prompt` ou `readline-sync` para a entrada de dados.
//O programa deve permitir o cadastro de doadores e deve conter as seguintes informações: nome, idade, peso, tipo sanguíneo e data da última doação.
//Ao acessar o sistema, o usuário deve ser apresentado a um menu com as seguintes opções:
function menu(){    
    var opcao = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`))
    switch (opcao){
        case 1:
            cadastrarDoador();
            break
        case 2:    
            listarDoadores();
            break
        case 3:
            buscarDoadoresTipo();
            break
        case 4:
            buscarDoadoresData();
            break
        case 5:
            break            
        default:
            console.log('Escolha uma opção!')
            menu();
            break                             
    }
}

//doadores pré-cadastrados
var doador0 = {
    nome: 'João da Silva',
    idade: 25,
    peso: 70,
    tipoSanguineo: 'AB-',
    ultimaDoacao: '01/01/2022'
}
var doador1 = {
    nome: 'Maria Santos',
    idade: 35,
    peso: 65,
    tipoSanguineo: 'A+',
    ultimaDoacao: '03/02/2022'
}
var doador2 = {
    nome: 'José Almeida',
    idade: 45,
    peso: 80,
    tipoSanguineo: 'O+',
    ultimaDoacao: '10/01/2022'
}
var doador3 = {
    nome: 'Ana Oliveira',
    idade: 27,
    peso: 58,
    tipoSanguineo: 'B-',
    ultimaDoacao: '22/04/2022'
}
var doador4 = {
    nome: 'Carlos Silva',
    idade: 30,
    peso: 75,
    tipoSanguineo: 'A-',
    ultimaDoacao: '14/03/2022'
}
//doadores pré-cadastrados

var arrayDoadores =[doador0,doador1,doador2,doador3,doador4];

//1. Cadastrar doador: essa opção permite cadastrar um novo doador no sistema. O programa deve solicitar o nome, a idade, o peso, o tipo sanguíneo 
//e a data da última doação do doador. O sistema deve armazenar essas informações em um objeto e esse objeto em um array de doadores.
function cadastrarDoador (){ 
    var nome = prompt('Informe nome do doador');
    var idade = Number(prompt ('Informe idade do doador'));
    var peso = Number(prompt('Informe peso do doador'));
    var tipoSanguineo = prompt('Informe tipo sanguíneo do doador');
    var ultimaDoacao = prompt('Informe data da última doação (formato: dd/mm/aaaa)');
    var confirmaDados = prompt(`Nome do doador: ${nome}
    Idade do doador: ${idade}
    Peso do doador: ${peso}
    Tipo sanguíneo do doador: ${tipoSanguineo}
    Última doação do doador: ${ultimaDoacao}
    CONFIRMA DADOS? (s para 'sim', n para 'não', outra tecla para voltar ao menu`)

    if(confirmaDados == 's'){
        var doador = {
            nome: nome,
            idade: idade,
            peso: peso,
            tipoSanguineo: tipoSanguineo,
            ultimaDoacao: ultimaDoacao
        }
        arrayDoadores.push(doador);
        var continuar = Number(prompt('Digite 1 para continuar cadastrando, 2 para listar doadores ou 3 para voltar ao menu'));
        switch (continuar){
            case 1:
                cadastrarDoador();
                break
            case 2:
                listarDoadores();
                break
            case 3:
                menu();
                break
            default:
                break                                
        }
    } 
    else if(confirmaDados=='n'){
        cadastrarDoador();
    }
    else{
        menu();
    }
}

//2. Listar doadores: essa opção lista todos os doadores cadastrados no sistema, mostrando suas informações completas.
function listarDoadores(){ 
    var listaDoadores = [];
    for (var i = 0; i < arrayDoadores.length; i++){
    listaDoadores.push(`
    ${arrayDoadores[i].nome}   | ${arrayDoadores[i].idade}     | ${arrayDoadores[i].peso}     | ${arrayDoadores[i].tipoSanguineo}    | ${arrayDoadores[i].ultimaDoacao}
    `)
    }
    var retornaDoadores = prompt(` nome  | idade  | peso  | tipo sanguíneo  | última doação  |
        ${listaDoadores} 
    Digite qualquer tecla para continuar:`)
    if (retornaDoadores !== null){
    menu();
    }
}

//3. Buscar doador por tipo sanguíneo: essa opção permite buscar doadores pelo seu tipo sanguíneo. O programa deve solicitar o tipo sanguíneo 
//desejado e listar todos os doadores com o mesmo tipo sanguíneo.
function buscarDoadoresTipo(){
    var tipo = prompt('Digite o tipo sanguíneo desejado');
    var doadoresDisponiveis = [];
    for (i = 0; i < arrayDoadores.length ; i++){
        if (arrayDoadores[i].tipoSanguineo === tipo){
            doadoresDisponiveis.push(`
        ${arrayDoadores[i].nome}   | ${arrayDoadores[i].idade}     | ${arrayDoadores[i].peso}     | ${arrayDoadores[i].tipoSanguineo}    | ${arrayDoadores[i].ultimaDoacao}
        `)
        }
    }
    if (doadoresDisponiveis.length > 0){
        var doadoresCompativeis = prompt(` nome  | idade  | peso  | tipo sanguíneo  | última doação  |
        ${doadoresDisponiveis} 
        Digite qualquer tecla para continuar:`)
        if (doadoresCompativeis !== null){
        menu();
        }
    }
    else {
        var doadoresCompativeis = prompt(`Não foram encontrados doadores para o tipo sanguíneo informado! 
        Digite qualquer tecla para continuar:`)
        if (doadoresCompativeis !== null){
            menu();
            }
    }
}

//4. Buscar doador por data da última doação: essa opção permite buscar doadores que fizeram a última doação antes de uma determinada data. 
//O programa deve solicitar a data desejada e listar todos os doadores que fizeram a última doação antes dessa data.
function buscarDoadoresData(){
    var data = prompt('Digite a data desejada (dd/mm/aaaa):');
    let trechosData = data.split("/");  //recebendo a string 'data' em um array e separando conforme as barras (/)
    let comparadorData = [trechosData[2], trechosData[1], trechosData[0]].join("-") //recebendo dados do array trechosData inversamente (a partir do último índice) e transformando-os em uma string no formato 'aaa-mm-dd', para fazer a comparação correta entre datas
    var doadoresDisponiveis = [];

    for (i = 0; i < arrayDoadores.length ; i++){
        let trechosArray = arrayDoadores[i].ultimaDoacao.split("/");
        let comparadorArray = [trechosArray[2], trechosArray[1], trechosArray[0]].join("-")
        if (comparadorArray <= comparadorData){ //boolean consegue comparar valores numéricos de uma string
            doadoresDisponiveis.push(`
            ${arrayDoadores[i].nome}   | ${arrayDoadores[i].idade}     | ${arrayDoadores[i].peso}     | ${arrayDoadores[i].tipoSanguineo}    | ${arrayDoadores[i].ultimaDoacao}
            `)
        }
    }
    if (doadoresDisponiveis.length > 0){
        var doadoresCompativeis = prompt(` nome  | idade  | peso  | tipo sanguíneo  | última doação  |
        ${doadoresDisponiveis} 
        Digite qualquer tecla para continuar:`)
        if (doadoresCompativeis !== null){
            menu();
        }
    }
    else {
        doadoresCompativeis = prompt(`Não há doadores de acordo com a data informada!
        Digite qualquer tecla para continuar:`)
        if (doadoresCompativeis !== null){
            menu();
        }
    }
    
}

//5. Sair: o programa deve encerrar.

menu();

