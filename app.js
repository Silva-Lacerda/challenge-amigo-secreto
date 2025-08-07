let amigos = [];
let campoInputAmigo = document.getElementById('amigo'); //boa prática para não repetir código
let numeroMaximoAmigos = 10;

function adicionarAmigo() {
    let nomeAmigo = campoInputAmigo.value; //pega o valor do campo e guarda na variavel nomeAmigo, boas práticas, assim n precisa ficar digitando campoInput.value toda hora
    
    if(amigos.length == 10){
        alert('Numero maximo de nomes atingido');
    } else {
        if(amigos.includes(nomeAmigo)) {
            alert('Esse nome já foi adicionado');
        } else if(nomeAmigo == ""){
            alert('Insira um nome');
        } else {
            amigos.push(nomeAmigo);
        }
    }

    exibirListaNaTela();
    limparCampo();
}

function exibirListaNaTela(){

    let listaHTML = document.getElementById('listaAmigos'); //pega a ul no HTML(listaAmigos) e armazena na variavel(listaHTML)

    listaHTML.innerHTML = ""; // limpa a lista para evitar duplicidade caso ela seja chamada mais de uma vez

    for(let i = 0; i < amigos.length; i++) {
        let itemLi = document.createElement('li'); //cria elmento li e guarda na variavel itemLi
        itemLi.textContent = amigos[i]; //define o texto da tag <li>, criado por itemLi, com o valor atual do array amigos usando textContent
        listaHTML.appendChild(itemLi); // adiciona o item li, já com o valor do array amigos, dentro da ul HTMl, que está sendo ferenciada por listaHTML
    }
}

function limparCampo(){
    campoInputAmigo.value = "";
    
}

function sortearAmigo() {
    if(amigos.length == 0 || amigos.length == 1){
        alert('Insira ao menos 2 nomes');
    } else {
        let numAleatorio = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[numAleatorio];
        console.log(nomeSorteado);

        let amigoSorteado = document.getElementById('resultado')
        amigoSorteado.innerHTML = nomeSorteado;
    }
}