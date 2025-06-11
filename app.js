// AS PARTES QUE CONTÉM "->" ANTES, SÃO OS CÓDIGOS QUE TEM A EXPLICAÇÃO ACIMA

// Arrays (listas) são indexadas, ou seja, cada valor dentro delas é associado a um índice numérico
// ao contrario do push, temos o pop que remove o ultimo elemento de uma array
// Booleano = valor que é verdadeiro ou falso
// document serve para referenciar o html do projeto, o querySelector serve para devolver o primeiro elemento no documento de acordo
// com os parâmetros estipulados dentro do ()
// -> let CAMPO = document.querySelector('TIPO DE ELEMENTO');
// significa basicamente "dentro de x no HTML", no caso esse X é a variável CAMPO que foi criada acima, enquanto o resto é o texto
// a ser exibido
// -> CAMPO.innerHTML = 'TEXTO A SER INSERIDO';

// Essa função funciona como padronização, ja que com o método acima teria que reescrever a generalização de acordo com cada caso,
// é mais fácil que tenha uma forma geral que muda objetivamente determinadas partes do código, o que é feito nessa função, com ela
// é possível mudar parametros definidos dentro do primeiro paranteses depois do nome da função
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // esse é um comando puxado na linha 7 código HTML do site ResponsiveVoice, que le oq a gente escolher, a gente seleciona ele com
    // responsiveVoice, seleciona o speak depois do ponto, e dentro dos parametros escolhe o que ele vai ler, no caso os textos, a 
    // língua, as opções ficam na documentação, e a velocidade de fala
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

// junção das duas mensagens iniciais do jogo
function exibirMensagemInicial () {
    // Quando puxamos a função e preenchemos o parenteses com as informações desejadas na ordem correda (caso a tag seja o primeiro
    // parametro na função, temos que colocar primeiro a tag que queremos que seja preenchido), as informações são substituídas sem que
    // precise reescrever
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};

// rodagem da função acima para os textos aparecerem
exibirMensagemInicial();

let numeroLimite = 10;
// definimos uma variável (let) com o nome (listaDeNumerosSorteados), só que essa variável é uma lista, da pra saber disso pelos []
let listaDeNumerosSorteados = [];

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// função é algo que vai executar algo, precisa de um nome (verificarChute nesse caso), dentro dos parenteses seria parametros externos
// da função, que nesse caso não vai ser necessário, ai deixa vazio
function verificarChute() {
    let chute = document.querySelector('input').value;
    // Sequência de if que já foi aprendida no curso anterior
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        // condicional na inserção da variável visto no curso 1
        let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
        // usar a referência a uma variável (${exemplo}) visto no curso 1
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        // função para abilitar o botão de Novo Jogo, ele tem no código dele no HTML um parametro 'disabled' que vamos remover, document
        // puxa informações do documento base desse JS (o HTML), getElementById serve para puxar um elemento especifico ja que o ID é
        // individual (não poderia o querySelector pq tem mais de um botão), passa o ID desejado (no caso 'reiniciar'), removeAttribute
        // serve para remover um atributo, e denrto do parenteses a gente seleciona qual atributo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        };
        // Já visto, é a mesma coisa que tentativas = tentativas + 1
        tentativas++;
        // puxando a função de limpar o campo após o erro para um novo chute
        limparCampo();
    };
};

// função de gerar o número ja explicada no projeto anterior junto com o "return", que faz com que esse cálculo de um retorno e possa
// dar valor pra variável "numeroSecreto", o return foi retirado depois mas a função é a mesma
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    // aqui definimos que a variavel quantidadeDeElementosNaLista é igual ao length da lista, que seria a quantidade de elementos nela
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // definimos que a variavel numeroLimite define qual que é o numero maximo, então caso a quantidade de elementos na lista seja
    // igual ao limite, vai esvaziar a lista
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    // se o numeroEscolhido esta incluido na lista de numeros sorteados
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        // caso ele esteja incluído, ou seja, se o if for verdadeiro, ele vai gerar outro número
        return gerarNumeroAleatorio();
    } else {
        // caso não seja verdadeiro, ele apenas retorna o numeroEscolhido
        return numeroEscolhido;
        // o push adiciona um item no fim da lista definida antes dele (listaDeNumerosSorteados), esse item fica nos parametros
        listaDeNumerosSorteados.push(numeroEscolhido);
    };
};

// função que primeiro puxa a variável chute selecionando a variável input (campo a ser preenchido no jogo), na segunda linha, define o
// value (valor) desse campo como vazio
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

// função que vai ser usada ao clicar no botão "novo jogo"
function reiniciarJogo() {
    // gera outro número secreto
    numeroSecreto = gerarNumeroAleatorio();
    // limpar o campo com o que tinha preenchido
    limparCampo();
    // reinicia a contagem de tentativas
    tentativas = 1;
    // exibe novamente as mensagens padrões
    exibirMensagemInicial();
    // desabilita o botão de novo jogo, que sera reabilitado quando acertar
    // para isso a gente segue o mesmo caminho para buscar um elemento especifico pelo ID, só que dessa vez a gente seta um atributo
    // ja que ele tinha sido removido, nos parametros a gente diz qual atributo e a forma que ele vai se apresentar, no caso true como
    // "funcionando"
    document.getElementById('reiniciar').setAttribute('disabled', true);
};