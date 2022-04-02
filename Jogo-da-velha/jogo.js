const table = {
  a1: "", a2: "", a3: "",
  b1: "", b2: "", b3: "",
  c1: "", c2: "", c3: "",
};

const displayLogin = document.querySelector(".login");
const displayGame = document.querySelector(".container");

const txtLogin = document.querySelector("p");
const txtGame = document.querySelector("h1");
const txtGame2 = document.querySelector("h2");
const txtGame3 = document.querySelector("h3");

const j1 = document.querySelector("#j1");
const j2 = document.querySelector("#j2");

displayGame.style.display = "none";
txtGame2.style.display = "none";
txtGame3.style.display = "none";

const bt01 = document.querySelector("#bt-01");
bt01.onclick = fazLogin;

//Função que verifica se os campos Jogador 1 e jogador 2 foram preenchidos e chama o inicio do jogo

function fazLogin(e) {
  e.preventDefault();
  if (j1.value.length + j2.value.length == 0) {
    txtLogin.innerHTML = "Campos 1 e 2 Vazios";
  } else if (j1.value.length === 0) {
    txtLogin.innerHTML = "Campo 1 vazio";
  } else if (j2.value.length === 0) {
    txtLogin.innerHTML = "Campo 2 vazio";
  } else {
    txtLogin.innerHTML = "Dados Inseridos com sucesso";
    setTimeout(() => {
      displayLogin.style.display = "none";
      displayGame.style.display = "flex";
      goHash("j1", j1);
    }, 1000);
  }
}

//Função de inicio do game seta o nome de jogador e tb seta o texto da vez de cada jogar, mostra na tela no jogo,
//e pega o evento de click de usuario chamando a função que insere na tabela

function goHash(play, idPlayer) {
  this.idPlayer = idPlayer.value;
  this.play = play;
  txtGame.innerHTML = `${this.idPlayer} Joga`;

  const plays = document.querySelectorAll("[chama-imagem]");
  plays.forEach((e) => (e.onclick = insertTable));
}

/* Função que verifica se a jogada é válida e insere no Objeto table a plays do usuario, depois chama função que checa
se usuario venceu e chama afunção de inserção de imagem  */

const insertTable = (e) => {
  const item = e.target.getAttribute("id");
  if (table[item] != "") {
    txtGame.innerHTML = "Jogada Inválida";
  } else {
    if (this.play == "j1") {
      table[item] = "O";
      newtable("O");
    } else {
      table[item] = "X";
      newtable("X");
    }
    showImage(e);
  }
};

/*  Função que armazena e atualiza os dados do array para checar condição de vitória
e chama a função que verifica  */

function newtable(check) {
  this.victory = [
    [table["a1"], table["a2"], table["a3"]],
    [table["b1"], table["b2"], table["b3"]],
    [table["c1"], table["c2"], table["c3"]],
    [table["a1"], table["b1"], table["c1"]],
    [table["a2"], table["b2"], table["c2"]],
    [table["a3"], table["b3"], table["c3"]],
    [table["a1"], table["b2"], table["c3"]],
    [table["a3"], table["b2"], table["c1"]],
  ];
  checkWins(check);
}

//  Função insere bolinha e X insere as imagens ns locais de cada jogada e chama próximo jogador

function showImage(e) {
  const item = e.target;
  item.getAttribute("id");

  if (this.play == "j1") {
    const newDiv = document.createElement("div");
    newDiv.classList.add("bolinha");
    item.appendChild(newDiv);
    goHash("j2", j2);
  } else {
    const newImage = document.createElement("img");
    newImage.src = "./x-01.jpg";
    item.appendChild(newImage);
    goHash("j1", j1);
  }
}

/* Função que checa se existe um vencedor de acordo com a lista victory que contém as condições de vitória,
caso não haja checa se há empate, caso não haja nem um nem outro continua o jogo   */

function checkWins(check, vict = false) {
  const winner = document.querySelector(".velha-img");
  const draw = [];
  const equal = (item) => item == check;
  for (value in table) {
    if (table[value] != "") {
      draw.push(table.draw);
    }
  }
  this.victory.forEach((list) => {
    if (list.every(equal)) {
      vict = true;
    }
  });

  if (vict) {
    winner.style.display = "none";
    txtGame.style.display = "none";
    showWinner();
  } else if (draw.length == 9) {
    winner.style.display = "none";
    txtGame.style.display = "none";
    showWinner("a tie");
  }
}

/* Função chamado quando houve um vencedor, e tem como objetivo esconder o display de jogadas de jogadores
setar um novo h1 e inserir o texto do vencedor na       */
function showWinner(msg) {
  if (msg == "a tie") {
    txtGame3.innerHTML = "Xii Deu Velha";
    txtGame3.style.display = "block";
    txtGame2.style.display = "block";
  } else {
    txtGame3.innerHTML = `${this.idPlayer} Venceu `;
    txtGame3.style.display = "block";
    txtGame2.style.display = "block";
  }
}
