console.log;
function calcular() {
  let promocao = window.document.getElementById("promocao");

  let texto1 = window.document.getElementById("texto1");

  let resultado = window.document.getElementById("resultado");

  let select = window.document.getElementById("lista");

  let value = select.options[select.selectedIndex].value;

  let promo = Number(promocao.value);
  let calcular = promo * (5 / 100);
  let total = promo - calcular;
  console.log(lista.value);
  let fruta = lista.value; //atribuição para as frutas
  let img = null; // vai fazer aparecer no site
  lista.setAttribute("disabled", ""); // atributo para deixar em start o modo de pesquisa quando for colocar mais de um item na lista.

  if (promo == 0 || (lista == 0 && resultado == 0)) {
    window.alert(" Verifique se os  dados abaixo estão corretos!");
    return;
  } else {
    //se feito todas as atribuições dentro desse else vai aparecer as imagens tbm

    img = document.createElement("img");
    img.setAttribute("id", "foto");
  }

  if (fruta == "Banana") {
    img.setAttribute("src", "imagens/banana.png.png");
  } else if (fruta == "Maçã") {
    img.setAttribute("src", "imagens/maca.png.png");
  }
  if (fruta == "Mamão") {
    img.setAttribute("src", "imagens/mamao.png.png");
  } else if (fruta == "Melão") {
    img.setAttribute("src", "imagens/melao.png");
  }
  if (fruta == "Uva") {
    img.setAttribute("src", "imagens/uva.png.png");
  } else if (fruta == "Abacate") {
    img.setAttribute("src", "imagens/abacate.png.png");
  }
  resultado.innerHTML = `O valor com desconto da fruta ${fruta} é  R$${total.toFixed(
    2
  )} `;
  resultado.appendChild(img);
}

//definindo o onclick
let ultimoClick = null; //novo indice vai começar nullo

let listaFruta = [...window.document.querySelectorAll(".lista-frutas picture")]; //Função que junta todas as imagens, os tres pontos vai espalhar. [...]

let frutaId = null;
listaFruta.map((fruta, indice) => {
  let novoIndice = indice + 1;
  let frutaImg = seletores(novoIndice).frutaImg;
  let texto = seletores(novoIndice).texto;
  frutaImg.addEventListener("click", () => {
    frutaId = novoIndice;

    clicar(frutaImg, texto, novoIndice);
    ultimoClick = novoIndice;
  });
}); // interação da lista, (=> vai pegar o mapeamento e vai jogar para frente cada item da lista)

function clicar(img, texto, idx) {
  if (ultimoClick !== null && ultimoClick !== frutaId) {
    seletores(ultimoClick).frutaImg.classList.remove("esconder");
    seletores(ultimoClick).texto.classList.add("esconder");
  }

  if (idx === frutaId) {
    img.classList.add(`esconder`);
    texto.classList.remove(`esconder`);
    texto.addEventListener("click", () => voltar(texto, img, idx));
  }
}

function voltar(texto, img, idx) {
  if (idx === frutaId) {
    img.classList.remove(`esconder`);
    texto.classList.add(`esconder`);
  }
}

function seletores(seletorId) {
  // objeto = tem propriedades
  // ex: caneta tem tampa, cor, vidro espelhado
  // const caneta = {
  //     tampa: '',
  //     cor: '',
  //     vidro: ''
  // }
  return {
    frutaImg: window.document.querySelector(`.img-${seletorId} img`),
    texto: window.document.querySelector(`.img-${seletorId} p`),
  };
}

window.addEventListener("load", () => {
  let cadastro1 = window.document.getElementById("cadastro1");

  let lista = document.getElementById("lista");

  //array com todos as posições da lista

  let option = document.createElement("option");

  const data = localStorage.getItem("fruta");

  const frut = JSON.parse(data);

  option.text = frut.frutaNome;

  lista.add(option);
});

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
